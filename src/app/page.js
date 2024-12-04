import LoremIpsum from "@/components/LorumImpsum";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export default function Home() {
    return (
        <>
            <HeroSection
                title="Welcome"
                subtitle="to Doni's portfoio."
                image="/images/wf_home.png"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}