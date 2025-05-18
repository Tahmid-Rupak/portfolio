import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatMain() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed right-6 p-6 transition-all duration-1000 ${
        visible ? "bottom-6 opacity-100" : "bottom-[-50px] opacity-0"
      }`}
    >
      {/* Wrapper for hover group */}
      <div className="relative group flex flex-col items-center">
        {/* Tooltip outside the button */}
        <span className="mb-2 font-roboto font-bold text-lightCyan opacity-0 -translate-y-2 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
          WhatsApp
        </span>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/8801518907202"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[64px] text-lightCyan inline-block hover:scale-125 transition-transform duration-400"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
