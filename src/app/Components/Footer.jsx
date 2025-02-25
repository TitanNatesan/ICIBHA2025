"use client";
import React, { useState, useRef } from "react";

export default function Footer() {
    const defaultText = { name: "Karpagam Academy of Higher Education", link: "https://www.kahedu.edu.in/" };
    const targetText = { name: "Titan Natesan", link: "https://titandev.ninja/" };

    const [academyText, setAcademyText] = useState(defaultText);
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);

    const startTypingAnimation = () => {
        let index = 0;
        setAcademyText({ name: "", link: targetText.link }); // Clear text for animation and update link

        intervalRef.current = setInterval(() => {
            index++;
            setAcademyText(prev => ({ ...prev, name: targetText.name.substring(0, index) }));

            if (index === targetText.name.length) {
                clearInterval(intervalRef.current);
            }
        }, 100); // Adjust typing speed (100ms per character)
    };

    const handleMouseEnter = () => {
        // Start a timer for 5 seconds before starting the typing animation
        timeoutRef.current = setTimeout(() => {
            startTypingAnimation();
        }, 5000);
    };

    return (
        <footer className="bg-purple-800 text-white py-4 mt-8 footer">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-center">
                    © 2025{" "}
                    <span
                        onMouseEnter={handleMouseEnter}
                        onClick={() => window.open(academyText.link, "_blank")}
                        className="cursor-pointer"
                    >
                        {academyText.name}
                    </span>
                    . All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
