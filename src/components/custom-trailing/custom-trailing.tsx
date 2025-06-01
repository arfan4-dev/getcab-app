import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed top-10 left-5 z-[9999] transition-all duration-150 ease-out"
            style={{
                transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
            }}
        >
            <div className="w-3 h-3 rounded-full bg-[#fdb813] shadow-lg"></div>
        </div>
    );
};

export default CustomCursor;
