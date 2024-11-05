"use client";

import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import TextReveal from '@/components/motion/text-reveal';
import { motion } from 'framer-motion';

const AnimatedDiscipline = ({ 
  text, 
  color, 
  gradientFrom,
  gradientTo,
  delay = 0 
}: { 
  text: string; 
  color: string; 
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
}) => (
  <motion.span
    className={`inline-block font-semibold px-1 cursor-pointer
      bg-clip-text text-transparent bg-gradient-to-r ${color}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ 
      scale: 1.1,
      textShadow: "0 0 8px rgb(255,255,255,0.5)",
    }}
  >
    {text}
  </motion.span>
);

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              <TextReveal>About Me</TextReveal>
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <TextReveal>
                  <span>
                    I&apos;m a Brazilian (English/Portuguese/Spanish) Software
                    Engineer based in Vancouver & Miami, with expertise in
                    full-stack development and AI technologies. Currently
                    pursuing a Combined Major in Business
                  </span>
      
                  
                  <span> and Computer Science</span>
                
                  
                  <span> at UBC Sauder (BUCS) with a minor in Data Science</span>
                  
          
                </TextReveal>
              </p>
              <div className="flex gap-2">
                <Button asChild variant={'outline'}>
                  <a href="resume.pdf" target="_blank">
                    View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </MotionWrap>
  );
}

export default About;
