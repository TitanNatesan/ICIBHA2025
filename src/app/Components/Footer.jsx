"use client";
import React, { useState, useRef } from "react";

export default function Footer() {
    const [academyText, setAcademyText] = useState("Karpagam Academy of Higher Education");
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        // Start a timer for 5 seconds
        timeoutRef.current = setTimeout(() => {
            setAcademyText("Titan Natesan");
        }, 3000);
    };

    const handleMouseLeave = () => {
        // Clear timer if user moves the mouse away before 5 seconds
        clearTimeout(timeoutRef.current);
    };

    return (
        <footer className="bg-purple-800 text-white py-4 mt-8 footer">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-center">
                    © 2025{" "}
                    <span
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="cursor-pointer"
                    >
                        {academyText}
                    </span>
                    . All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}