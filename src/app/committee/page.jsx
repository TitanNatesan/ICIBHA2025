export const metadata = {
    title: "Conference Committee - ICIBHA 2025",
    description: "Meet the distinguished conference committee members for the 2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics (ICIBHA-2025) at Karpagam Academy of Higher Education.",
    openGraph: {
        title: "Conference Committee - ICIBHA 2025",
        description: "Meet the distinguished conference committee members for the 2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics (ICIBHA-2025).",
        url: "https://icibha-2025.vercel.app/committee",
        type: "website",
    },
};

import Image from 'next/image';
import React from 'react';

function PersonCard({ commonTitle, img, name, designation, college, department, faculty }) {
    return (
        <div className="bg-gray-50 rounded p-4 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
            <Image
                src={img ? img : `https://robohash.org/${name}`}
                alt={name}
                className="w-28 h-28 rounded-full object-cover mb-4"
                width={280}
                height={280}
                loading='lazy'
            />
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-gray-600z">{designation}</p>
            {department && <p className="text-gray-600">{department}</p>}
            {faculty && <p className="text-gray-500">{faculty}</p>}
            <p className="text-gray-500">{college}</p>
            {commonTitle && <p className="uppercase text-sm text-purple-800 mt-2">{commonTitle}</p>}
        </div>
    );
}

export default function Committee() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--heading)' }}>
                Conference Committee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PersonCard
                    commonTitle="Chief Patron"
                    img="/people/venkat.jpg"
                    name="Prof. Dr. B. Venkatachalapathy"
                    designation="Vice Chancellor"
                    college="Karpagam Academy of Higher Education"
                />
                <PersonCard
                    commonTitle="Chief Patron"
                    img="/people/ravi.jpg"
                    name="Dr. S. Ravi"
                    designation="Registrar"
                    college="Karpagam Academy of Higher Education"
                />

                <PersonCard
                    commonTitle="Patron"
                    img='/people/a-amudha.jpeg'
                    name="Dr. A. Amudha"
                    designation="Dean"
                    faculty="Faculty of Engineering"
                    college="Karpagam Academy of Higher Education"
                />
                <PersonCard
                    commonTitle="Convener"
                    img='/people/kamalraj.jpg'
                    name="Dr. Kamalraj Subramaniam"
                    designation="Professor and Head"
                    department="Department of Biomedical Engineering"
                    faculty="Faculty of Engineering"
                    college="Karpagam Academy of Higher Education"
                />
                <PersonCard
                    commonTitle="Conference Chair"
                    img='/people/mohana.jpg'
                    name="Dr. A. Mohanarathinam"
                    designation="Assistant Professor"
                    department="Department of Biomedical Engineering"
                    faculty="Faculty of Engineering"
                    college="Karpagam Academy of Higher Education"
                />
                <PersonCard
                    commonTitle="Organizing Secretary"
                    img="/people/ramesh.jpg"
                    name="Dr. Ramesh Munirathinam"
                    designation="Assistant Professor"
                    department="Department of Biomedical Engineering"
                    faculty="Faculty of Engineering"
                    college="Karpagam Academy of Higher Education"
                />
            </div>
        </div>
    );
}
