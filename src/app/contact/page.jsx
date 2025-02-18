export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>Contact Us</h2>

            <p className="mb-4">
                For any queries regarding the conference, feel free to reach out to us.
            </p>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Contact Information</h3>
            <p className="mb-4">
                <strong>Mobile:</strong> 98650 02264, 99401 97856 <br />
                <strong>Email:</strong> icibhabme@gmail.com
            </p>

            <h3 className="text-xl font-semibold text-purple-800 mb-2">Location</h3>
            <p className="mb-4">
                Karpagam Academy of Higher Education, Coimbatore, Tamil Nadu, India
            </p>

            <div className="w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31341.03940484721!2d76.99886640000001!3d10.9157042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85af2d5b63f75%3A0x958123c48e7c849d!2sKarpagam%20Academy%20of%20Higher%20Education!5e0!3m2!1sen!2sin!4v1739727327898!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
