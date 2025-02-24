"use client";
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    {
        label: "About",
        subLinks: [
            { href: "/about-institution", label: "About Institution" },
            { href: "/about-conference", label: "About Conference" },
            { href: "/about-the-department", label: "About The Department" },
        ],
    },
    { href: "/committee", label: "Committee" },
    { href: "/call-for-papers", label: "Call for Papers" },
    { href: "/guidelines", label: "Guidelines" },
    { href: "/registration", label: "Registration" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href="/">
                        <img
                            src="/logo-l.png"
                            alt="KAHE Conference Logo"
                            className="h-16 w-auto cursor-pointer"
                        />
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-purple-800 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="hidden md:flex md:items-center md:w-auto">
                        <ul className="flex flex-row space-x-4">
                            {navLinks.map((link) => (
                                <li key={link.href || link.label} className="relative group">
                                    {link.subLinks ? (
                                        <>
                                            <span className="block text-purple-800 hover:text-purple-600 cursor-pointer">
                                                {link.label}
                                            </span>
                                            <div className="absolute left-0 mt-0 w-60 bg-white shadow-lg border border-gray-200 hidden group-hover:block">
                                                <ul>
                                                    {link.subLinks.map(({ href, label }) => (
                                                        <li key={href}>
                                                            <Link
                                                                href={href}
                                                                className="block px-4 py-2 text-purple-800 hover:bg-gray-100"
                                                            >
                                                                {label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href={link.href} className="block text-purple-800 hover:text-purple-600">
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${isOpen ? "translate-x-0 mt-20" : "-translate-x-full"
                    }`}
            >
                <div className="mt-8">
                    <ul className="flex flex-col space-y-4 px-4">
                        {navLinks.map((link) => (
                            <React.Fragment key={link.href || link.label}>
                                {link.subLinks ? (
                                    <>
                                        <span className="block text-purple-800 hover:text-purple-600">
                                            {link.label}
                                        </span>
                                        <ul className="ml-4 mt-2">
                                            {link.subLinks.map(({ href, label }) => (
                                                <li key={href}>
                                                    <Link
                                                        href={href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block text-purple-800 hover:text-purple-600"
                                                    >
                                                        {label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <li>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-purple-800 hover:text-purple-600"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                />
            )}
        </>
    );
}
