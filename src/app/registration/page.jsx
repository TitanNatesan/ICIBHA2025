"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Registration() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = (e) => {
        e.stopPropagation();
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
                Registration & Important Dates
            </h2>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Registration Fee</h3>
            <p className="mb-4">
                The registration fee for the conference is <strong>Rs. 500 per paper</strong>.
            </p>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Important Dates</h3>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>Last Date for Submission of Research Papers:</strong> 21st February 2025
                </li>
                <li>
                    <strong>Notification of Acceptance:</strong> 28th February 2025
                </li>
                <li>
                    <strong>On-Spot Registration:</strong> Available
                </li>
                <li>
                    <strong>Conference Date:</strong> 5th March 2025
                </li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Manuscript Submission</h3>
            <p className="mb-4">
                Authors must submit their manuscripts to <strong>icibhabme@gmail.com</strong>.
            </p>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Registration Link</h3>
            <p className="mb-4">
                Interested participants can register using the following link:
                <br />
                <a
                    href="https://forms.gle/UCJhx749PuXosYpV8"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Register Here
                </a>
            </p>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Scan to Register</h3>
            <div className="flex justify-center my-4">
                <Image
                    src='/qr.png'
                    alt="QR Code for Registration"
                    width={300}
                    height={300}
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Contact</h3>
            <p>
                For further queries, contact:
                <br />
                <strong>Mobile:</strong> 98650 02264, 99401 97856
                <br />
                <strong>Email:</strong> icibhabme@gmail.com
            </p>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={closeModal}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src="/qr.png"
                            alt="QR Code Full Screen"
                            width={700}
                            height={700}
                        />
                        <button
                            className="absolute top-2 right-2 text-white bg-gray-800 rounded p-1"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
