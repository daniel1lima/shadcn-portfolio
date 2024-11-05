import React from 'react';
import SkillCard from './skill-card';
import Marquee from 'react-fast-marquee';

import Reveal from '@/components/reveal';
import { useTheme } from 'next-themes';

import { skills } from '@/components/sections/skills/config';
import MotionWrap from '@/components/motion-wrap';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython,
  SiRust,
  SiGo,
  SiCplusplus,
  SiR,
  SiReact, 
  SiNextdotjs,
  SiFlask,
  SiDjango,
  SiNodedotjs,
  SiMysql,
  SiRedis,
  SiMongodb,
  SiDocker,
  SiGit,
  SiTensorflow,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiJupyter
} from '@icons-pack/react-simple-icons';

function Skills() {
  
  const skillIcons = {
    'Software Development': [
      SiPython,
      SiTypescript,
      SiJavascript,
      SiRust,
      SiGo,
      SiCplusplus,
      SiR
    ],
    'Web Technologies': [
      SiReact,
      SiNextdotjs,
      SiFlask,
      SiDjango,
      SiNodedotjs
    ],
    'Database & Cloud': [
      SiMysql,
      SiRedis,
      SiMongodb,
      SiDocker,
      SiGit
    ],
    'AI & Machine Learning': [
      SiPython,
      SiTensorflow,
      SiPandas,
      SiPytorch,
      SiScikitlearn,
      SiKeras,
      SiOpencv,
      SiJupyter
    ]
  };

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Skills
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="mt-6 flex flex-col gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={`skill_${index}`}
                index={index + 1}
                name={skill.name}
                description={skill.description}
                thumbnail={skill.thumbnail}
              />
            ))}
          </div>
          <div className="mt-6 w-96 overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 rounded-lg p-4">
            {skills.map((skill, skillIndex) => (
              <div 
                className={`overflow-hidden mt-7 ${skillIndex !== skills.length - 1 ? 'mb-24' : ''}`} 
                key={`marquee_${skillIndex}`}
              >
                <Marquee 
                  className="flex" 
                  speed={40}
                  autoFill={true}
                  pauseOnHover
                >
                  {[...Array(2)].map((_, arrayIndex) => (
                    <div 
                      key={`row_${skillIndex}_${arrayIndex}`} 
                      className="flex items-center gap-8 px-4"
                    >
                      {skillIcons[skill.name].map((Icon, iconIndex) => (
                        <Icon 
                          key={`icon_${skillIndex}_${arrayIndex}_${iconIndex}`} 
                          className="h-8 w-8 text-zinc-700 dark:text-zinc-300"
                          color="default"
                        />
                      ))}
                    </div>
                  ))}
                </Marquee>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
