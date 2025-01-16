import { useState, useEffect } from "react";

import Y from "./youhaveenteredthevoid/Y";
import O from "./youhaveenteredthevoid/O";
import U from "./youhaveenteredthevoid/U";

export const LoadingScreen = () => {
    const [fontSize, setFontSize] = useState(16);
    const [endText, setEndText] = useState(false);

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

    return (
        <div className="relative h-[100rem] overflow-x-hidden">
            {!endText &&
                <div
                    className={`fixed top-0 h-dvh w-dvw flex justify-center items-center flex-col`}
                    style={{ fontSize: `${fontSize}px` }}
                >

                    <p className="text-slate-950 font-thin">
                        scroll to enter the <span className="line-through">void</span> <span className="text-blue-600">world</span>
                    </p>

                </div>
            }

            {endText &&
                <div>
                    <Y />
                    <O />
                    <U />
                </div>
            }
        </div>
    );
};
