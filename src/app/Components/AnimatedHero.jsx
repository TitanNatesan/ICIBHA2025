"use client";
import React from "react";

export default function AnimatedHero() {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 overflow-hidden">

            {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('/bro.jpg')] bg-cover bg-center opacity-10"></div> */}


            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4 ">
                    2<sup>nd</sup> National Level Conference on <br />
                    Intelligent Bio systems for Healthcare Analytics
                </h1>
                <p className="text-purple-800 text-lg md:text-2xl">
                    Organized by Department of Biomedical Engineering
                </p>
            </div>
        </section>
    );
}
