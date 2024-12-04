import SequentialText from "./SequentialText";

export default function HeroSection({ title, subtitle, image, alt }) {
  // Derive the base image name (without extension)
  const baseImageName = image.replace(/\.(png|jpg|jpeg|webp)$/, "");

  return (
    <section className="relative flex justify-center items-center py-20 my-20 sm:mt-36 sm:py-20 md:mt-0 md:py-0 md:min-h-screen bg-base overflow-visible">
      {/* Left Flower */}
      <picture
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 sm:-translate-x-32 md:-translate-x-72 xl:-translate-x-36 2xl:-translate-x-6 pointer-events-none mt-0 md:mt-10 z-10 opacity-30"
      >
        <source
          srcSet={`${baseImageName}-2xl.webp 1536w, ${baseImageName}-xl.webp 1280w, ${baseImageName}-lg.webp 1024w, ${baseImageName}-md.webp 768w, ${baseImageName}-sm.webp 480w`}
        sizes="(max-width: 639px) 480px, (max-width: 767px) 768px, (max-width: 1023px) 1024px, (max-width: 1279px) 1280px, 1536px"
          type="image/webp"
        />
        <img
          src={`${baseImageName}-lg.webp`} // Fallback image for browsers that don't support WebP
          alt={alt}
          className="max-w-5xl md:w-2/3 w-1/2 h-auto"
          loading="eager"
        />
      </picture>

      {/* Right Flower */}
      <picture
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 sm:translate-x-32 md:translate-x-72 xl:translate-x-36 2xl:translate-x-6 rotate-180 pointer-events-none mt-0 md:mt-10 z-0 opacity-30"
      >
        <source
          srcSet={`${baseImageName}-2xl.webp 1536w, ${baseImageName}-xl.webp 1280w, ${baseImageName}-lg.webp 1024w, ${baseImageName}-md.webp 768w, ${baseImageName}-sm.webp 480w`}
          sizes="(max-width: 639px) 480px, (max-width: 767px) 768px, (max-width: 1023px) 1024px, (max-width: 1279px) 1280px, 1536px"
          type="image/webp"
        />
        <img
          src={`${baseImageName}-lg.webp`} // Fallback image
          alt={alt}
          className="max-w-5xl md:w-2/3 w-1/2 h-auto"
          loading="eager"
        />
      </picture>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <SequentialText title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
