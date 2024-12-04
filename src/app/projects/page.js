import LoremIpsum from "@/components/LorumImpsum";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export const metadata = {
    title: "Projects | Responsive Template",
    description: "Created by Doni",
};

export default function Projects() {
    return (
        <>
            <HeroSection
                title="Projects"
                subtitle="Check \'em out."
                image="/images/webp/wf_projects"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}