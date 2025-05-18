import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatMain() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after 1 second
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
      <a
        href="https://wa.me/8801518907202"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[64px] text-lightCyan inline-block hover:scale-125 transition-transform duration-400"
      >
        <FaWhatsapp />
      </a>
      <span className="absolute top-0 left-1 font-roboto font-bold text-[#075e54] opacity-0 -translate-y-14 transition-all duration-400 hover:translate-y-0 hover:opacity-100">
        WhatsApp
      </span>
    </div>
  );
}
