import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling beyond 1.5 components (~500px)
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-[#fdb813] hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg transition duration-300"
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} />
            </button>
        )
    );
};

export default ScrollToTopButton;
