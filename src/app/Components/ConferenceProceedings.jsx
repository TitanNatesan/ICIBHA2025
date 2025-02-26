import React from 'react';
import "./style.css"
import Image from 'next/image';

export default function ConferenceProceedings() {
    const images = [
        '/jote.png',
        '/sigma.png',
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
                Conference Proceedings and Publications
            </h2>
            <p>
                All the shortlisted papers will be published in conference proceedings with ISBN number and also selected extended papers will be submitted to the following journals adhering to its policies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded ">
                        <Image width={1200} height={600} loading='lazy' src={src} alt={`Past Conference ${index + 1}`} className="w-full h-auto object-cover conimg" />
                    </div>
                ))}
            </div>
        </div>
    );
}