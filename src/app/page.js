export const metadata = {
  title: "Home - KAHE Conference - ICIBHA2025",
  description:
    "Welcome to the Conference. KAHE presents the 2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics. Explore details about the conference, institution, call for papers, and more.",
};

import AboutConference from "./about-conference/page";
import AboutInstitution from "./about-institution/page";
import CallForPapers from "./call-for-papers/page";
import Committee from "./committee/page";
import AnimatedHero from "./Components/AnimatedHero";
import ConferenceProceedings from "./Components/ConferenceProceedings";
import Contact from "./contact/page";
import Guidelines from "./guidelines/page";
import Registration from "./registration/page";

export default function Home() {
  return (
    <>
      <AnimatedHero />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold" style={{ color: 'var(--heading)' }}>
          Welcome to the Conference
        </h1>
        <p className="mb-4" style={{ color: 'var(--foreground)' }}>
          Karpagam Academy of Higher Education (KAHE) proudly presents the 2nd National Level Conference on Intelligent Biosystems for Healthcare Analytics.
        </p>
        <p style={{ color: 'var(--foreground)' }}>
          Explore our website to learn more about the institution, conference details, important dates, paper submissions, and more.
        </p>
      </main>
      <hr />
      <AboutConference />
      <hr />
      <AboutInstitution />
      <hr />
      <CallForPapers />
      <hr />
      <Committee />
      <hr />
      <Registration />
      <hr />
      <Guidelines />
      <hr />
      <ConferenceProceedings />
      <hr />
      <Contact />
    </>
  );
}