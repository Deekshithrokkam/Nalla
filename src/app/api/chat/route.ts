import { NextRequest, NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GeminiContent = {
  role: "user" | "model";
  parts: { text: string }[];
};

const DEFAULT_MODEL = "gemini-2.5-flash";
const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta/models";

const SYSTEM_PROMPT = `You are Nalla Assistant, the friendly AI chatbot for Nalla's Pooja Products.

ABOUT THE COMPANY:
- Name: Nalla's Pooja Products (Registered Trademark)
- Founded: 2006, with 20+ years of experience
- Type: Manufacturer only, not an online store
- Location: Sree Medha Dakshinamurthy Pooja Samagri, Hyderabad, Telangana, India

PRODUCTS WE MANUFACTURE:
1. Agarbatti (Incense Sticks): Jasmine, Sandalwood, Rose, Devotional blends
2. Kumkum (Sacred Vermilion): Pure, for daily puja and festivals
3. Turmeric Powder (Haldi): Natural, vibrant colour, ritual purity
4. Camphor (Kapur): Clean-burning tablets for aarti and purification
5. Cotton Wicks (Rui Batti): Hand-rolled, various sizes for diyas
6. Dhoop Sticks: Resin-based, rich meditative fragrance
7. Sambrani: Traditional cups and powder for South Indian rituals
8. Pooja Essentials: Vibhuti, chandan, rangoli, sacred threads and more

KEY STRENGTHS:
- 20+ years manufacturing experience
- 100% in-house production, zero outsourcing
- Natural and chemical-free ingredients
- Consistent quality in every batch

CONTACT:
- Phone / WhatsApp: +91 91541 27230
- Email: info@nallaspooja.com
- Business Hours: Monday to Saturday, 9AM to 6PM IST

INSTRUCTIONS:
- Be warm, respectful, professional and spiritual
- Keep replies concise and helpful
- For pricing questions, say pricing depends on product and quantity, then ask them to call or WhatsApp +91 91541 27230
- For bulk or wholesale enquiries, direct them to call +91 91541 27230 or fill the contact form
- Never invent information not listed above`;

function normalizeMessages(messages: ChatMessage[]): GeminiContent[] {
  const contents: GeminiContent[] = [];

  for (const message of messages) {
    if (
      (message.role !== "user" && message.role !== "assistant") ||
      typeof message.content !== "string" ||
      !message.content.trim()
    ) {
      continue;
    }

    const role = message.role === "assistant" ? "model" : "user";
    if (!contents.length && role !== "user") continue;

    const text = message.content.trim();
    const previous = contents[contents.length - 1];

    if (previous?.role === role) {
      previous.parts[0].text = `${previous.parts[0].text}\n\n${text}`;
    } else {
      contents.push({ role, parts: [{ text }] });
    }
  }

  if (contents[0]?.role === "user") {
    contents[0].parts[0].text = `${SYSTEM_PROMPT}\n\n---\n\nUser message: ${contents[0].parts[0].text}`;
  }

  return contents;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Chat API key is not configured." }, { status: 500 });
    }

    const body = await request.json();
    if (!Array.isArray(body?.messages)) {
      return NextResponse.json({ error: "Invalid chat payload." }, { status: 400 });
    }

    const contents = normalizeMessages(body.messages);
    if (!contents.length) {
      return NextResponse.json({ error: "A user message is required." }, { status: 400 });
    }

    const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
    const response = await fetch(
      `${GEMINI_API_BASE}/${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
          },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      const message =
        typeof data?.error?.message === "string" ? data.error.message : "Gemini request failed.";
      return NextResponse.json({ error: message }, { status: response.status });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!reply) {
      return NextResponse.json({ error: "No response returned from Gemini." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
