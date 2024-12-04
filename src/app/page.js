import LoremIpsum from "@/components/LorumImpsum";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export const metadata = {
    title: "Home | Responsive Template",
    description: "Created by Doni",
};

export default function Home() {
    return (
        <>
            <HeroSection
                title="Welcome"
                subtitle="to Doni\'s portfolio."
                image="/images/webp/wf_home"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}
