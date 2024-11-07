'use client';

import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import TextReveal from '@/components/motion/text-reveal';
import { motion } from 'framer-motion';
import FancyText from '@carefully-coded/react-text-gradient';

import { 
  SiGithub, 
  SiLinkedin, 
  SiGmail,
} from '@icons-pack/react-simple-icons';
import { Building2, GraduationCap, Languages, MapPin, Phone } from 'lucide-react';

const tags = [

  {
    icon: Building2,
    text: 'UBC Sauder School of Business',
    link: 'https://www.sauder.ubc.ca/'
  },
  {
    icon: GraduationCap,
    text: 'Business and Computer Science (BUCS)',
    link: ''
  },
  {
    icon: GraduationCap,
    text: 'Minor in Data Science',
    link: ''
  },
  // Location
  {
    icon: MapPin,
    text: 'Vancouver, Canada & Miami, Florida',
    link: ''
  },

];

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
    className={`inline-block cursor-pointer bg-gradient-to-r bg-clip-text
      px-1 font-semibold text-transparent ${color}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{
      scale: 1.1,
      textShadow: '0 0 8px rgb(255,255,255,0.5)'
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
          {/* Grid space 1 */}
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

                  <span>
                    {' '}
                    at UBC Sauder (BUCS) with a minor in Data Science
                  </span>
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

          {/* Grid space 2 */}
          <div className="space-y-4 mt-8">
            {tags.map((tag, index) => {
              return (
                <motion.div key={index} className="flex items-center gap-2 transition-all ease-in-out hover:-translate-x-1 ">
                  <tag.icon className="size-4" />
                  {tag.link && tag.icon === Building2 ? (
                    <a href={tag.link} target="_blank">
                      <FancyText
                        gradient={{ from: 'rgb(59 238 221)', to: 'rgb(33 148 182)' }}
                        animate
                        animateDuration={1000}
                      >
                        {tag.text}
                      </FancyText>
                    </a>
                  ) : tag.link ? (
                    <a href={tag.link} target="_blank">
                      {tag.text}
                    </a>
                  ) : (
                    <span>{tag.text}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
