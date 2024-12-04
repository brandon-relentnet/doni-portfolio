import LoremIpsum from "@/components/LorumImpsum";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export default function Projects() {
    return (
        <>
            <HeroSection
                title="Projects"
                subtitle="Check 'em out."
                image="/images/wf_projects.png"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}