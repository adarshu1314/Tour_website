import { ArrowDown, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center gap-2 z-50">
      <button
        onClick={scrollToTop}
        className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        title="Scroll to Top"
      >
        <ArrowUp size={20}  className="textOrange"/>
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition"
        title="Scroll to Bottom"
      >
        <ArrowDown size={20} className="textOrange"/>
      </button>
    </div>
  );
};

export default ScrollButtons;
