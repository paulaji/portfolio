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
                className="fixed top-0 h-dvh w-dvw text-white flex justify-center items-center flex-col"
                style={{ fontSize: `${fontSize}px` }}
            >
                <p className="text-slate-950 font-thin">scroll to enter the <span className="line-through">void</span> world</p>
            </div>
        </div>
    );
};
