// src/app/about-conference/page.jsx

export const metadata = {
    title: 'About the Conference | Intelligent Biosystems for Healthcare Analytics',
    description: 'Learn about the National Level Conference on Intelligent Biosystems for Healthcare Analytics, its objectives, and expected outcomes for interdisciplinary innovation.',
};

export default function AboutConference() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
                About the Conference
            </h2>
            <p className="mb-4">
                The National Level Conference on Intelligent Biosystems for Healthcare Analytics is a highly reputed forum designed to address the challenges and opportunities in the field of healthcare analytics. The event serves as an ideal platform for academicians, scientists, industry professionals, and research scholars to share their innovative research and technological advances.
            </p>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Objective</h3>
            <p className="mb-4">
                The primary objective of the conference is to provide a vibrant platform for exchanging ideas, research findings, and best practices in the realm of biosystems and healthcare analytics.
            </p>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Expected Outcome</h3>
            <p>
                Participants can look forward to interdisciplinary discussions that will foster knowledge exchange, strengthen collaborations among young researchers and scientists, and ultimately drive the development of innovative solutions for the healthcare industry.
            </p>
        </div>
    );
}
