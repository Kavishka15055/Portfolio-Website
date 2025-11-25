'use client';
import React from 'react'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt';

const skills = [
  {
    name:"Javascript",
    icon:<SiJavascript/>,
    percentage: 89,
  },
  {
    name:"React.Js",
    icon:<SiReact/>,
    percentage: 92,
  },
  {
    name:"Next.js",
    icon:<SiNextdotjs/>,
    percentage: 90,
  },
  {
    name:"Node.js",
    icon:<SiNodedotjs/>,
    percentage: 88,
  },
  {
    name:"Tailwind CSS",
    icon:<SiTailwindcss/>,
    percentage: 94,
  },
  {
    name:"TypeScript",
    icon:<SiTypescript/>,
    percentage: 75,
  },
  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 lg:py-24 w-full relative z-10 "
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-linear-to-br  bg-clip-text ">
        Skills and Technologies
      </h2>
      <div className='flex flex-wrap justify-center gap-6 mt-16'>
        {skills.map((skil) => {
          return <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
              <div className='bg-[#14134145] dark:bg-blue-950 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                <div className='text-5xl mb-4  dark:text-white'>
                  {skil.icon}
                </div>
                <p className='text-2xl font-semibold'>
                  {skil.percentage}%
                </p>
                <p className='text-primary mt-1'>
                  {skil.name}
                </p>
              </div>
          </Tilt>
        })}
      </div>
    </section>
  )
}

export default Skills