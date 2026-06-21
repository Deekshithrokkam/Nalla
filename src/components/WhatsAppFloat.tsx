"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919154127230?text=Hi%2C%20I%20am%20interested%20in%20Nalla's%20Pooja%20Products.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-12 h-12 rounded-full bg-green-500 shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="white">
          <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.365.633 4.588 1.737 6.512L2.667 29.333l6.995-1.708A13.25 13.25 0 0 0 16.004 29.333c7.368 0 13.333-5.965 13.333-13.333S23.372 2.667 16.004 2.667zM16 27.333a11.25 11.25 0 0 1-5.713-1.553l-.41-.247-4.152 1.012 1.04-4.028-.27-.423A11.29 11.29 0 0 1 4.667 16C4.667 9.74 9.74 4.667 16 4.667S27.333 9.74 27.333 16 22.26 27.333 16 27.333zm6.17-8.52c-.338-.169-2.002-.987-2.312-1.1-.31-.113-.537-.169-.763.17-.227.338-.876 1.1-1.074 1.326-.197.225-.394.253-.732.085-.338-.17-1.428-.526-2.72-1.677-1.006-.896-1.685-2.002-1.882-2.34-.197-.338-.021-.521.148-.689.152-.15.338-.394.507-.59.17-.198.226-.338.339-.564.112-.225.056-.422-.028-.59-.085-.17-.763-1.84-1.045-2.52-.276-.66-.557-.572-.763-.582-.197-.01-.422-.012-.648-.012-.225 0-.59.085-.9.422-.31.338-1.18 1.154-1.18 2.814s1.208 3.264 1.376 3.49c.17.225 2.378 3.63 5.763 5.088.806.347 1.434.554 1.924.708.808.257 1.544.22 2.126.134.649-.097 2.002-.818 2.284-1.609.282-.79.282-1.468.197-1.609-.084-.14-.31-.225-.648-.394z" />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-14 bg-green-600 text-white text-xs rounded-lg px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
}
