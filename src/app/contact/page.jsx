export const metadata = {
    title: "Contact - ICIBHA 2025",
    description:
        "Reach out to us for any queries regarding the ICIBHA 2025 conference at Karpagam Academy of Higher Education.",
    openGraph: {
        title: "Contact - ICIBHA 2025",
        description:
            "Reach out to us for any queries regarding the ICIBHA 2025 conference.",
        url: "https://icibha-2025.vercel.app/contact",
        type: "website",
    },
};

export default function Contact() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <header>
                <h1 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
                    Contact Us
                </h1>
                <p className="mb-4">
                    For any queries regarding the conference, feel free to reach out to us.
                </p>
            </header>

            <article>
                <section>
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">
                        Contact Information
                    </h2>
                    <address className="mb-4 not-italic">
                        <p>
                            <strong>Mobile:</strong> 98650 02264, 99401 97856
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:icibhabme@gmail.com">icibhabme@gmail.com</a>
                        </p>
                    </address>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-purple-800 mb-2">
                        Location
                    </h2>
                    <p className="mb-4">
                        Karpagam Academy of Higher Education, Coimbatore, Tamil Nadu, India
                    </p>
                </section>

                <section className="w-full h-96 shadow-xl rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31341.03940484721!2d76.99886640000001!3d10.9157042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85af2d5b63f75%3A0x958123c48e7c849d!2sKarpagam%20Academy%20of%20Higher%20Education!5e0!3m2!1sen!2sin!4v1739727327898!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Karpagam Academy of Higher Education Location"
                    ></iframe>
                </section>
            </article>
        </main>
    );
}
