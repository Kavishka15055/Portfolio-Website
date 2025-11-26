"use client";
import React from "react";
import { FaCode, FaGraduationCap, FaLightbulb, FaUsers } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAjv,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiSelenium,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { Button } from "../ui/moving-border";
import { DiJava } from "react-icons/di";

const skills = [
  {
    name: "Javascript",
    icon: <SiJavascript />,
    
  },
  {
    name: "React.Js",
    icon: <SiReact />,
    
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    
  },
  {
    name: "Python",
    icon: <SiPython />,
    
  },
  {
    name: "PHP",
    icon: <SiPhp />,
    
  },
  {
    name: "Java",
    icon: <DiJava />,
    
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    
  },
  {
    name: "Selenium",
    icon: <SiSelenium />,
    
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
    
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
    
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
    
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    
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
              <div className="bg-[#14134145] dark:bg-blue-950 text-center w-24 sm:w-24 md:w-25 lg:w-30 h-32 sm:h-32 md:h-33 lg:h-38 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105 hover:z-50 relative">
                <div className="text-5xl mb-4 dark:text-white">{skil.icon}</div>
                
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
