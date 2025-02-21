"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import "./style.css"

export default function AnimatedHero() {
    // Initialize particles.js once the component mounts
    useEffect(() => {
        // Check if particlesJS is loaded on window
        if (window.particlesJS) {
            // Load particles configuration from /particles.json
            window.particlesJS.load("particles-js", "/particles.json", function () {
                console.log("Particles.js loaded successfully.");
            });
        }
    }, []);

    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 overflow-hidden">
            <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" strategy="afterInteractive" />

            <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>

            <div className="text-center z-10 px-4 hero">
                <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4">
                    2<sup>nd</sup> National Level Conference on <br />
                    Intelligent Bio systems for Healthcare Analytics
                </h1>
                <p className="text-purple-800 text-lg md:text-2xl font-extrabold">
                    Organized by Department of Biomedical Engineering
                </p>
            </div>
        </section>
    );
}
