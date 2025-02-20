import Head from 'next/head';

export default function Guidelines() {
    return (
        <>
            <Head>
                <title>Submission Guidelines | Intelligent Biosystems for Healthcare Analytics</title>
                <meta name="description" content="Read the submission guidelines for Intelligent Biosystems for Healthcare Analytics. Get details on manuscript requirements, review process, and awards." />
                <meta name="keywords" content="submission guidelines, IEEE conference, research paper, peer review, Intelligent Biosystems, Healthcare Analytics" />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
                    Submission Guidelines
                </h2>
                <p className="mb-4">
                    Authors are invited to submit original, unpublished research papers relevant to the theme of
                    <strong> Intelligent Biosystems for Healthcare Analytics.</strong> All submissions will undergo
                    a rigorous peer-review process to ensure quality and relevance.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mb-2">Manuscript Requirements</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Papers should be prepared using the IEEE conference template.</li>
                    <li>The manuscript should not exceed 6 pages, including figures and references.</li>
                    <li>All papers must be in English and formatted as per IEEE guidelines.</li>
                    <li>At least one author must present the paper to receive the certificate.</li>
                </ul>

                <h3 className="text-xl font-semibold text-purple-800 mb-2">Review Process</h3>
                <p className="mb-4">
                    Submitted papers will undergo a double-blind peer review by an expert committee.
                    The review process ensures that only high-quality research contributions are accepted.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mb-2">Awards</h3>
                <p className="mb-4">
                    The <strong>best paper</strong> will be awarded a cash prize and recognized during the
                    conference closing ceremony.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mb-2">Submission</h3>
                <p>
                    Authors must submit their papers via email to <strong>icibhabme@gmail.com</strong>
                    before the submission deadline.
                </p>
            </div>
        </>
    );
}