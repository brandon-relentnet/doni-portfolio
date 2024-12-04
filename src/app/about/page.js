import LoremIpsum from "@/components/LorumImpsum";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export default function About() {
  return (
    <>
      <HeroSection
        title='Doni'
        subtitle="/ˈ dough-ˈ knee/"
        image="/images/wf_about.png"
        alt="Watercolor flowers"
      />

      <div className="page-container">
        {/* Display some placeholder text */}
        <LoremIpsum />
      </div>
    </>
  );
}