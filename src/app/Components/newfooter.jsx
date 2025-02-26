"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-white text-2xl font-semibold text-start">Quick Links</h3>
                        <ul className="list-none p-0 flex flex-col gap justify-start items-start">
                            <li><Link href="/" className="text-white hover:underline">Home</Link></li>
                            <li><Link href="/about-institution" className="text-white hover:underline">About Institution</Link></li>
                            <li><Link href="/about-conference" className="text-white hover:underline">About Conference</Link></li>
                            <li><Link href="/about-the-department" className="text-white hover:underline">About The Department</Link></li>
                            <li><Link href="/committee" className="text-white hover:underline">Committee</Link></li>
                            <li><Link href="/call-for-papers" className="text-white hover:underline">Call for Papers</Link></li>
                            <li><Link href="/guidelines" className="text-white hover:underline">Guidelines</Link></li>
                            <li><Link href="/registration" className="text-white hover:underline">Registration</Link></li>
                            <li><Link href="/contact" className="text-white hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-semibold text-start">Useful Links</h3>
                        <ul className="list-none p-0 flex flex-col gap justify-start items-start">
                            <li><a href="https://www.ieee.org/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">IEEE</a></li>
                            <li><a href="https://www.springer.com/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">Springer</a></li>
                            <li><a href="https://www.sciencedirect.com/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">ScienceDirect</a></li>
                            <li><a href="https://scholar.google.com/" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-semibold text-start">Contact Us</h3>
                        <address className="not-italic">
                            <p>Karpagam Academy of Higher Education</p>
                            <p>Coimbatore, Tamil Nadu, India</p>
                            <p>Email: <a href="mailto:icibhabme@gmail.com" className="text-white hover:underline">icibhabme@gmail.com</a></p>
                            <p>Phone: 98650 02264, 99401 97856</p>
                        </address>
                    </div>
                </div>
                <hr className="border-white my-4" />
                <p className="text-center mt-4">
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
