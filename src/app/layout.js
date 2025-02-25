// src/app/layout.js
// "use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Tailwind global styles
import Navbar from "../app/Components/Navbar";
import Footer from "../app/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "KAHE Conference - ICIBHA2025 | National Level Conference on Intelligent Biosystems for Healthcare Analytics",
  description:
    "Join the 2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics (ICIBHA2025) organized by KAHE. Explore cutting-edge research, networking opportunities, and innovation in healthcare analytics.",
  keywords: [
    "National Level Conference on Intelligent Biosystems for Healthcare Analytics",
    "ICIBHA2025",
    "icibha2025",
    "icibha 2025",
    "icibha",
    "icibha 2k25",
    "2nd icibha",
    "2nd icibha 2025",
    "Karpagam Academy Of Higher Education Conference",
    "KAHE Conference",
    "kahe conference",
    "NCIBHA 2025",
    "NCIBHA",
    "NCIBHA-2025",
    "Department of Bio Medical Engineering",
    "Department of Biomedical Engineering",
    "Biomedical Engineering",
    "Healthcare Analytics",
    "Titan",
    "Natesan",
    "Titan Natesan",
    "Titan Dev",
    "National Conference",
    "KAHE National Conference",
    "National level Conference 2025",
    "National level Conference",
    "National Conference 2025",
    "KAHE National Conference 2025",
    "KAHE National level Conference",
    "KAHE National level Conference 2025",
  ],
  openGraph: {
    title:
      "KAHE Conference - ICIBHA2025 | National Level Conference on Intelligent Biosystems for Healthcare Analytics",
    description:
      "2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics (ICIBHA2025). Dive into innovative research and trends in healthcare analytics.",
    url: "https://icibha-2025.vercel.app/",  // Replace with your site URL
    siteName: "ICIBHA2025",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KAHE Conference - ICIBHA2025 | National Level Conference on Intelligent Biosystems for Healthcare Analytics",
    description:
      "Join us for the 2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics (ICIBHA2025) and discover the latest research and trends in healthcare analytics."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Comfortaa:wght@300..700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Lora:ital,wght@0,400..700;1,400..700&family=Marcellus&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Teko:wght@300..700&display=swap" rel="stylesheet" />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
        <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
