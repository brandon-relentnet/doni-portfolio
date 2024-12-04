import Image from "next/image";
import SequentialText from "./SequentialText";

export default function HeroSection({ title, subtitle, image, alt }) {
  // Derive the base image name (without extension)
  const baseImageName = image.replace(/\.(png|jpg|jpeg|webp)$/, "");

  // Generate image URLs for Next.js Image component
  const getImageSrc = (size) => `${baseImageName}-${size}.webp`;

  // Reusable component for the flower images
  const FlowerImage = ({ position, alt }) => {
    const isLeft = position === "left";

    // Adjust side and transformation classes for alignment
    const sideClass = isLeft ? "-left-32" : "-right-32 rotate-180";
    const className = `${sideClass} pointer-events-none z-10 opacity-30 relative`;

    return (
      <div className={className} style={{ width: "50%", height: "auto" }}>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <Image
            src={getImageSrc("lg")} // Default image size
            alt={alt}
            fill // Allows the image to stretch to fit its parent container
            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 75vw, 100vw"
            priority // Prioritize both images
            className="object-contain" // Maintains image aspect ratio
          />
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-screen flex justify-center items-center py-28 bg-base overflow-hidden">
      {/* Left Flower */}
      <FlowerImage position="left" alt={`${alt} (left)`} />

      {/* Text Content */}
      <div className="absolute z-20 text-center px-4">
        <SequentialText title={title} subtitle={subtitle} />
      </div>

      {/* Right Flower */}
      <FlowerImage position="right" alt={`${alt} (right)`} />
    </section>
  );
}
