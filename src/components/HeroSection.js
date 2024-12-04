import SequentialText from "./SequentialText";

export default function HeroSection({ title, subtitle, image, alt }) {
  // Derive the base image name (without extension)
  const baseImageName = image.replace(/\.(png|jpg|jpeg|webp)$/, "");

  // Common image sources and sizes
  const srcSet = `${baseImageName}-2xl.webp 1536w, ${baseImageName}-xl.webp 1280w, ${baseImageName}-lg.webp 1024w, ${baseImageName}-md.webp 768w, ${baseImageName}-sm.webp 480w`;
  const sizes =
    "(max-width: 639px) 480px, (max-width: 767px) 768px, (max-width: 1023px) 1024px, (max-width: 1279px) 1280px, 1536px";
  const fallbackSrc = `${baseImageName}-lg.webp`;

  // Reusable component for the flower images
  const FlowerImage = ({ position }) => {
    const isLeft = position === "left";

    const sideClass = isLeft ? "left-0" : "right-0";
    const translateXPrefix = isLeft ? "-" : "";
    const translateXClass = `${translateXPrefix}translate-x-16 sm:${translateXPrefix}translate-x-32 md:${translateXPrefix}translate-x-72 xl:${translateXPrefix}translate-x-36 2xl:${translateXPrefix}translate-x-6`;
    const rotationClass = isLeft ? "" : "rotate-180";

    const className = `absolute ${sideClass} top-1/2 transform -translate-y-1/2 ${translateXClass} ${rotationClass} pointer-events-none mt-0 md:mt-10 z-10 opacity-30`;

    return (
      <picture className={className}>
        <source srcSet={srcSet} sizes={sizes} type="image/webp" />
        <img
          src={fallbackSrc}
          alt={alt}
          className="max-w-5xl md:w-2/3 w-1/2 h-auto"
          loading="eager"
        />
      </picture>
    );
  };

  return (
    <section className="relative flex justify-center items-center py-20 my-20 sm:mt-36 sm:py-20 md:mt-0 md:py-0 md:min-h-screen bg-base overflow-visible">
      {/* Left Flower */}
      <FlowerImage position="left" />

      {/* Right Flower */}
      <FlowerImage position="right" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <SequentialText title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
