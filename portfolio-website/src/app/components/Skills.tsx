"use client";
import React from "react";
import { FaCode, FaGraduationCap, FaLightbulb, FaUsers } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { Button } from "../ui/moving-border";

const skills = [
  {
    name: "Javascript",
    icon: <SiJavascript />,
    percentage: 89,
  },
  {
    name: "React.Js",
    icon: <SiReact />,
    percentage: 92,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    percentage: 90,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    percentage: 88,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 94,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 75,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 lg:py-24 w-full relative z-10  "
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-linear-to-br  bg-clip-text ">
        Skills and Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skil) => {
          return (
            <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
              <div className="bg-[#14134145] dark:bg-blue-950 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105 hover:z-50 relative">
                <div className="text-5xl mb-4 dark:text-white">{skil.icon}</div>
                <p className="text-2xl font-semibold">{skil.percentage}%</p>
                <p className="text-primary mt-1">{skil.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
      {/* Key Points - Updated Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto px-4  justify-items-center">
        

        
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-gray-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
          containerClassName="h-50 w-65" // Add height and width here
        >
          <div className="flex items-start space-x-4 p-6   ">
          <div className="bg-primary/10 p-3 rounded-full shrink-0">
            <FaCode className="text-primary text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
              Full Stack Developer
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-left pl-2">
              Expertise in both frontend and backend technologies
            </p>
          </div>
        </div>
        </Button>
        

        


        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-gray-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
          containerClassName="h-50 w-65" // Add height and width here
        >
          <div className="flex items-start space-x-4 p-6   ">
          <div className="bg-primary/10 p-3 rounded-full shrink-0">
            <FaLightbulb className="text-primary text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
              Quick Learner
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-left pl-2">
              Always eager to learn new technologies and methodologies
            </p>
          </div>
        </div>
        </Button>


        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-gray-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
          containerClassName="h-50 w-65" // Add height and width here
        >
          <div className="flex items-start space-x-4 p-6   ">
          <div className="bg-primary/10 p-3 rounded-full shrink-0">
            <FaUsers className="text-primary text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
              Team Player
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-left pl-2">
              Collaborative mindset with strong communication skills
            </p>
          </div>
        </div>
        </Button>





        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-gray-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
          containerClassName="h-50 w-65" // Add height and width here
        >
          <div className="flex items-start space-x-4 p-6   ">
          <div className="bg-primary/10 p-3 rounded-full shrink-0">
            <FaGraduationCap className="text-primary text-xl" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-lg">
              Problem Solver
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-left pl-2">
              Passionate about solving complex technical challenges
            </p>
          </div>
        </div>
        </Button>
      </div>
    </section>
  );
};

export default Skills;
