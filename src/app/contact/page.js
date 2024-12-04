import LoremIpsum from "@/components/LorumImpsum";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));

export default function Contact() {
    return (
        <>
            <HeroSection
                title="Contact"
                subtitle="Reach out to Doni."
                image="/images/wf_contact.png"
                alt="Watercolor flowers"
            />

            <div className="page-container">
                {/* Display some placeholder text */}
                <LoremIpsum />
            </div>
        </>
    );
}