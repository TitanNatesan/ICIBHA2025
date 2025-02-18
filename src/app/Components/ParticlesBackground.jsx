"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function ParticlesBackground() {
    useEffect(() => {
        // Ensure particlesJS is available on window
        if (window.particlesJS) {
            window.particlesJS.load("particles-js", "/particles.json", function () {
                console.log("particles.js config loaded");
            });
        }
    }, []);

    return (
        <>
            {/* Load particles.js library from CDN */}
            <Script
                src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
                strategy="afterInteractive"
            />
            {/* Particle container */}
            <div
                id="particles-js"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            ></div>
        </>
    );
}
