import { useState, useEffect } from "react";
import Y from "./youhaveenteredthevoid/Y";
import YO from "./youhaveenteredthevoid/YO";
import YOU from "./youhaveenteredthevoid/YOU";

export const LoadingScreen = () => {
    const [fontSize, setFontSize] = useState(16);
    const [endText, setEndText] = useState(false);

    const [showY, setShowY] = useState(true);
    const [showYO, setShowYO] = useState(false);
    const [showYOU, setShowYOU] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            const newFontSize = Math.min(100, 16 + scrollPosition / 10);
            setFontSize(newFontSize);

            if (scrollPosition + windowHeight >= documentHeight) {
                setEndText(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (endText) {
            // Show Y for 200ms
            const timerY = setTimeout(() => {
                setShowY(false);
                setShowYO(true); // Show YO after Y
            }, 200);

            // Show YO for 200ms
            const timerYO = setTimeout(() => {
                setShowYO(false);
                setShowYOU(true); // Show YOU after YO
            }, 400);

            // Clear timeouts when components unmount
            return () => {
                clearTimeout(timerY);
                clearTimeout(timerYO);
            };
        }
    }, [endText]);

    return (
        <div className="relative h-[100rem] overflow-x-hidden">
            {!endText && (
                <div
                    className={`fixed top-0 h-dvh w-dvw flex justify-center items-center flex-col`}
                    style={{ fontSize: `${fontSize}px` }}
                >
                    <p className="text-slate-950 font-thin">
                        scroll to enter the <span className="line-through">void</span> <span className="text-blue-600">world</span>
                    </p>
                </div>
            )}

            {endText && (
                <div>
                    {showY && <Y />}
                    {showYO && <YO />}
                    {showYOU && <YOU />}
                </div>
            )}
        </div>
    );
};
