'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import TextReveal from '@/components/motion/text-reveal'
import Reveal from '@/components/reveal'
import ParallaxImage from '@/components/motion/parallax-image'
import { SiLinkedin } from '@icons-pack/react-simple-icons'
import { SiGithub } from '@icons-pack/react-simple-icons'

function Hero() {
  const container = useRef<HTMLDivElement>(null)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [isTooltipVisible2, setIsTooltipVisible2] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            
            <h1 className="text-center text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <div className="flex items-center justify-center gap-4 cursor-default">
                <TextReveal>I&apos;m Daniel</TextReveal>
                <Reveal>
                  <div className="flex flex-col items-center gap-4">
                    <a href="https://github.com/daniel1lima" target="_blank"> 
                      <SiGithub size={24} className="cursor-pointer hover:text-purple-600 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/danielbalima/" target="_blank">
                      <SiLinkedin size={24} className="cursor-pointer hover:text-blue-600 transition-colors" />
                    </a>
                  </div>
                </Reveal>
              </div>
              <span className="flex flex-row items-center gap-3 md:gap-4">
                <Reveal>
                  <span className="flex flex-row items-center gap-1 cursor-default">
                    <span>A&nbsp;</span>
                    <span className="flex">
                      {'Fullstack'.split('').map((letter, index) => (
                        <motion.span
                          key={index}
                          className="animate-gradient bg-300% bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text font-medium text-transparent"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                    <span>&nbsp;Developer</span>
                  </span>
                  <p className="mt-2 text-base font-light italic md:text-lg lg:text-xl">
                    (and fulltime student)
                  </p>
                </Reveal>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
        <div
          className="relative flex-1"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          onMouseMove={handleMouseMove}
        >
          <ParallaxImage
            src="/images/hero.jpg"
            containerRef={container}
            alt="Hero image"
            containerClassName="aspect-[4/2] w-full"
            priority
            parallaxOptions={{
              yStart: '-5%',
              yEnd: '5%',
              scaleStart: 1,
              scaleEnd: 1.2
            }}
          />
          <AnimatePresence>
            {isTooltipVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed pointer-events-none z-50 bg-black bg-opacity-75 text-white px-3 py-2 rounded-md"
                style={{
                  left: mousePos.x + 10,
                  top: mousePos.y + 10
                }}
              >
                <p className="text-md">Produhacks 2023 @ UBC</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className="relative flex-1"
          onMouseEnter={() => setIsTooltipVisible2(true)}
          onMouseLeave={() => setIsTooltipVisible2(false)}
          onMouseMove={handleMouseMove}
        >
          <ParallaxImage
            src="/images/INNER_059.jpg"
            containerRef={container}
            alt="Inner image"
            containerClassName="aspect-[4/2] w-full"
            priority
            parallaxOptions={{
              yStart: '-5%',
              yEnd: '5%',
              scaleStart: 1,
              scaleEnd: 1.2
            }}
          />
          <AnimatePresence>
            {isTooltipVisible2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed pointer-events-none z-50 bg-black bg-opacity-75 text-white px-3 py-2 rounded-md"
                style={{
                  left: mousePos.x + 10,
                  top: mousePos.y + 10
                }}
              >
                <p className="text-sm">Inner AI 2024 Tech Fair</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Hero