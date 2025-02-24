// src/app/about-institution/page.jsx

export const metadata = {
    title: 'About the Department | Karpagam Academy of Higher Education',
    description:
        'Discover Karpagam Academy of Higher Education (KAHE) - a premier institution known for academic excellence, innovative research, and state-of-the-art infrastructure.',
};

export default function AboutTheDepartment() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
                About the Department
            </h2>
            <p className="mb-4">
                Biomedical Engineering is a multidisciplinary field that integrates biology and engineering and applying engineering principles to healthcare. Biomedical Engineering is a relatively newly introduced branch of Engineering. The demand of Biomedical Engineers is growing as it helps to address the gap of medical and engineering to develop quality health care products.
            </p>
            <p>
                Department of Biomedical Engineering was established in the year 2016. Department Biomedical Engineering has well qualified and dedicated faculty members engaged in research and development. The Department has established the Center for Biophotonics and technology to promote inhouse research activities among students and faculty members. Young department to receive grants from Department of Science and Technology, Delhi. Our department holds the track record of providing 85-90 % placement and facilitates students to start their startups for developing biomedical devices.
            </p>
        </div>
    );
}