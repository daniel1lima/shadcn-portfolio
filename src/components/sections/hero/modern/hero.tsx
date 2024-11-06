'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import Reveal from '@/components/reveal';
import ParallaxImage from '@/components/motion/parallax-image';

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center">
              <TextReveal>I&apos;m Daniel</TextReveal>
              <br />
              <span className="flex flex-row items-center gap-3 md:gap-4">
                <Reveal>
                  <span className="flex flex-row items-center gap-1">
                    <span>A&nbsp;</span>
                    <span className="flex">
                      {'Fullstack'.split('').map((letter, index) => (
                        <motion.span
                          key={index}
                          className="animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent bg-300% font-medium"
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                    <span>&nbsp;Developer</span>
                  </span>
                  <p className="text-base italic font-light md:text-lg lg:text-xl mt-2">
                    (and fulltime student)
                  </p>
                </Reveal>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-colrelative">
      <ParallaxImage
        src="/images/hero.jpg"
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-[4/2] w-full lg:mt-20"
        priority
        parallaxOptions={{
          yStart: '-5%',
          yEnd: '5%',
          scaleStart: 1,
          scaleEnd: 1.2
        }}
      />
      <ParallaxImage
        src="/images/INNER_059.jpg"
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-[4/2] w-full lg:mt-20"
        priority
        parallaxOptions={{
          yStart: '-5%',
          yEnd: '5%',
          scaleStart: 1,
          scaleEnd: 1.2
        }}
      />
      </div>
      
    </section>
  );
}

export default Hero;
