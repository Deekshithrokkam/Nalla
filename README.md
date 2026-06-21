# Nalla's Pooja Products — Premium Corporate Website

A world-class premium corporate website for **Nalla's Pooja Products**, a trusted Indian manufacturer of pooja and spiritual products established in 2006.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design tokens)
- **Animations**: CSS animations
- **AI Chatbot**: Powered by Gemini through a server-side Next.js API route
- **Fonts**: Playfair Display, Inter, Noto Serif Devanagari

---

## 📁 Project Structure

```
nallapooja/
├── public/
│   └── logo.jpeg               # Nalla's brand logo
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky glass navbar
│   │   ├── Footer.tsx           # Dark luxury footer
│   │   ├── ChatBot.tsx          # AI chatbot (Claude-powered)
│   │   ├── WhatsAppFloat.tsx    # WhatsApp floating button
│   │   ├── FloatingParticles.tsx# Ambient particle effects
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Cinematic hero
│   │       ├── AboutSection.tsx      # Company story
│   │       ├── ProductsSection.tsx   # Product categories grid
│   │       ├── WhyChooseUsSection.tsx# Value proposition
│   │       ├── ManufacturingSection.tsx # Process & quality
│   │       ├── StatsSection.tsx      # Animated counters
│   │       ├── TestimonialsSection.tsx # Customer reviews carousel
│   │       └── ContactSection.tsx    # Enquiry form + map
│   └── styles/
│       └── globals.css          # Custom design system CSS
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn

### 2. Install Dependencies

```bash
cd nallapooja
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 🤖 AI Chatbot Setup

The **Nalla Assistant** chatbot is powered by Gemini through `src/app/api/chat/route.ts`.

For it to work in production, you need to set up an API proxy that adds your Anthropic API key. The chatbot currently calls `https://api.anthropic.com/v1/messages` directly — in a production deployment, you should:

1. Create an API route in Next.js (`src/app/api/chat/route.ts`)
2. Keep the Gemini API key server-side via `.env.local`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   GEMINI_MODEL=gemini-2.5-flash
   ```
3. Add the same `GEMINI_API_KEY` in Vercel Project Settings > Environment Variables.

---

## 🎨 Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Saffron | `#FF7A00` | Primary accent, buttons |
| Gold | `#FFBF00` | Secondary accent, highlights |
| Crimson | `#8B0020` | Brand name, deep accents |
| Temple Brown | `#3D1C00` | Body text |
| Ivory | `#FAF6F0` | Background |

### Typography
- **Display**: Playfair Display (headings, brand name)
- **Body**: Inter (all body text)
- **Sacred**: Noto Serif Devanagari (OM symbol)

---

## 📱 Sections

| # | Section | Features |
|---|---------|----------|
| 1 | **Navbar** | Glass morphism, active section tracking, mobile menu |
| 2 | **Hero** | Full-screen, mandala animation, parallax, entrance animations |
| 3 | **About** | Company story, values grid, 20+ years badge |
| 4 | **Products** | 8 product cards with hover effects |
| 5 | **Why Choose Us** | Dark temple background, 6 USPs with animations |
| 6 | **Manufacturing** | Process steps, quality highlights |
| 7 | **Stats** | Animated counters (20+ years, 10k+ customers) |
| 8 | **Testimonials** | Auto-scrolling carousel, 5 reviews |
| 9 | **Contact** | Enquiry form, info cards, Google Maps |
| 10 | **Footer** | Dark luxury footer with all links |

### Floating Elements
- 💬 **AI Chatbot** — Bottom-right, Claude-powered
- 📱 **WhatsApp Button** — Quick WhatsApp chat
- ✨ **Particles** — Ambient saffron/gold floating dots

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Other Platforms
This is a standard Next.js app — compatible with:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted (Node.js server)

---

## 📞 Contact Info to Update

Before deploying, update these details in the source:
- Phone number (search for `+91 91541 27230`)
- Email (search for `info@nallaspooja.com`)
- Address (search for `Hyderabad, Telangana`)
- Google Maps embed URL in `ContactSection.tsx`

---

## ©️ Brand

**Nalla's Pooja Products** — Registered Trademark ® Est. 2006  
*Crafting Devotion Since 2006*
