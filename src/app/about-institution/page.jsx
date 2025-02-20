// src/app/about-institution/page.jsx

export const metadata = {
    title: 'About the Institution | Karpagam Academy of Higher Education',
    description:
        'Discover Karpagam Academy of Higher Education (KAHE) - a premier institution known for academic excellence, innovative research, and state-of-the-art infrastructure.',
};

export default function AboutInstitution() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
                About the Institution
            </h2>
            <p className="mb-4">
                Karpagam Academy of Higher Education (KAHE) is a premier institution of higher learning, known for its academic excellence and commitment to research and innovation. Established with the vision of imparting quality education, KAHE offers a dynamic learning environment that nurtures creativity and intellectual growth.
            </p>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Vision</h3>
            <p className="mb-4">
                KAHE aims to be a globally recognized institution, dedicated to fostering research, innovation, and entrepreneurship in various fields of study.
            </p>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Mission</h3>
            <ul className="list-disc list-inside mb-4">
                <li>To provide a holistic learning experience through quality education and research.</li>
                <li>To encourage innovation and entrepreneurship among students.</li>
                <li>To build industry partnerships and promote skill-based education.</li>
                <li>To contribute to the betterment of society through knowledge dissemination.</li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Infrastructure</h3>
            <p>
                KAHE boasts a state-of-the-art campus equipped with modern laboratories, a well-stocked library, research centers, and excellent sports facilities, ensuring a comprehensive learning environment for students.
            </p>
        </div>
    );
}