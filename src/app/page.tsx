import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const ExpertiseSection = dynamic(() => import("./components/ExpertiseSection"), {
  loading: () => <div className="h-screen bg-[#252529]" />,
});
const WorkSection = dynamic(() => import("./components/WorkSection"), {
  loading: () => <div className="h-screen bg-[#252529]" />,
});
const ExperienceSection = dynamic(() => import("./components/ExperienceSection"), {
  loading: () => <div className="h-screen bg-[#252529]" />,
});
const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => <div className="py-20 bg-[#252529]" />,
});

export default function Home() {
  return (
    <main role="main">
      <Hero />
      <ExpertiseSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}