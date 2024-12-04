"use client";

import SequentialText from "./SequentialText";
import { motion } from "framer-motion";

export default function HeroSection({ title, subtitle, image, alt }) {
  // Derive the base image name (without extension)
  const baseImageName = image.replace(/\.(png|jpg|jpeg|webp)$/, "");

  return (
    <section className="relative flex justify-center items-center py-20 my-20 sm:mt-20 sm:py-20 md:mt-0 md:py-0 md:min-h-screen bg-base overflow-hidden">
      {/* Left Flower */}
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/3 pointer-events-none mt-0 md:mt-10 z-0"
      >
        <source
          srcSet={`${baseImageName}-2xl.webp 1536w, ${baseImageName}-xl.webp 1280w, ${baseImageName}-lg.webp 1024w, ${baseImageName}-md.webp 768w, ${baseImageName}-sm.webp 480w`}
          sizes="(max-width: 640px) 480px, 
                 (max-width: 768px) 768px, 
                 (max-width: 1024px) 1024px, 
                 (max-width: 1280px) 1280px, 
                 1536px"
          type="image/webp"
        />
        <img
          src={`${baseImageName}-lg.webp`} // Fallback image for browsers that don't support WebP
          alt={alt}
          className="max-w-5xl md:w-2/3 w-1/2 h-auto"
        />
      </motion.picture>

      {/* Right Flower */}
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 md:translate-x-1/3 rotate-180 pointer-events-none mt-0 md:mt-10 z-0"
      >
        <source
          srcSet={`${baseImageName}-2xl.webp 1536w, ${baseImageName}-xl.webp 1280w, ${baseImageName}-lg.webp 1024w, ${baseImageName}-md.webp 768w, ${baseImageName}-sm.webp 480w`}
          sizes="(max-width: 640px) 480px, 
                 (max-width: 768px) 768px, 
                 (max-width: 1024px) 1024px, 
                 (max-width: 1280px) 1280px, 
                 1536px"
          type="image/webp"
        />
        <img
          src={`${baseImageName}-lg.webp`} // Fallback image
          alt={alt}
          className="max-w-5xl md:w-2/3 w-1/2 h-auto"
        />
      </motion.picture>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <SequentialText title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
