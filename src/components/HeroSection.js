"use client";

import SequentialText from "./SequentialText";
import { motion } from "framer-motion";

export default function HeroSection({ title, subtitle, image, alt }) {
  return (
    <section className="relative flex justify-center items-center py-20 my-20 sm:mt-20 sm:py-20 md:mt-0 md:py-0 md:min-h-screen bg-base overflow-hidden">
      {/* Left Flower */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeIn" }}
        src={image}
        alt={alt}
        className="
          absolute left-0 top-1/2
          max-w-lg md:max-w-xl
          w-1/2 sm:w-1/3 md:w-1/2
          h-auto
          transform -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/3
          pointer-events-none
          mt-0 md:mt-10
          z-0
        "
      />

      {/* Right Image */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, ease: "easeIn" }}
        src={image}
        alt={alt}
        className="
          absolute right-0 top-1/2
          max-w-lg md:max-w-xl
          w-1/2 sm:w-1/3 md:w-1/2
          h-auto
          transform -translate-y-1/2 translate-x-1/4 md:translate-x-1/3 rotate-180
          pointer-events-none
          mt-0 md:mt-10
          z-0
        "
      />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <SequentialText title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}