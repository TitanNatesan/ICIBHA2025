export const metadata = {
    title: 'Call for Papers | ICIBHA-2025 - Intelligent Biosystems for Healthcare Analytics',
    description: 'Submit your original research paper for the 2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics. Find submission guidelines, important dates, and conference tracks here.',
    keywords: 'ICIBHA-2025, call for papers, healthcare analytics, research, conference, submission guidelines',
    // Optional: add a canonical URL and Open Graph tags if desired
};

export default function CallForPapers() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <header>
                <h1 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>Call for Papers</h1>
            </header>
            <section>
                <p className="mb-4">
                    {/* The 2nd National Level Conference on <strong>Intelligent Biosystems for Healthcare Analytics (ICIBHA-2025)</strong> invites original research papers from students, academicians, researchers, and industry experts. */}
                    National conference is a premier forum for the
                    presentation of technological advances and research
                    results. Topics of submission include interest for the
                    following, but<strong> not limited to</strong>
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Conference Tracks</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>AI and Machine Learning in Healthcare</li>
                    <li>Sports Biomechanics</li>
                    <li>Sports Rehabilitation</li>
                    <li>Speech Therapy</li>
                    <li>Wearable and Implantable Medical Devices</li>
                    <li>Signal processing techniques</li>
                    <li>Pattern recognition</li>
                    <li>Deep learning</li>
                    <li>Health Data Analytics and Big Data in Medicine</li>
                    <li>Biophotonics</li>
                    <li>Computer Vision</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Submission Guidelines</h2>
                <p className="mb-4">
                    Authors are requested to submit their manuscripts via email to <a href="mailto:icibhabme@gmail.com"><strong>icibhabme@gmail.com</strong></a>.
                    All submissions must be in IEEE format and should not exceed 6 pages.
                </p>
            </section>

            {/* <section>
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Important Dates</h2>
                <ul className="list-disc list-inside mb-4">
                    <li><strong>Last Date for Paper Submission:</strong> 25th February 2025</li>
                    <li><strong>Notification of Acceptance:</strong> 28th February 2025</li>
                    <li><strong>Conference Date:</strong> 5th March 2025</li>
                </ul>
            </section> */}

            <section>
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Publication</h2>
                <p className="mb-4">
                    All shortlisted papers will be published in conference proceedings with an ISBN number.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-purple-800 mb-2">Contact</h2>
                <p>
                    For further queries, contact <strong>Dr. M. Ramesh</strong>, Assistant Professor, Department of Biomedical Engineering, KAHE.
                </p>
            </section>
        </div>
    );
}
