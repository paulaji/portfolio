import { useState, useEffect } from "react";

export const LoadingScreen = () => {
    const [fontSize, setFontSize] = useState(16);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newFontSize = Math.min(100, 16 + scrollPosition / 10);
            setFontSize(newFontSize);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative h-[100rem] overflow-x-hidden">
            <div
                className="fixed top-0 h-dvh w-dvw font-mono text-white flex justify-center items-center"
                style={{ fontSize: `${fontSize}px` }}
            >
                <p className="text-red-700">hello.</p>
            </div>
        </div>
    );
};
