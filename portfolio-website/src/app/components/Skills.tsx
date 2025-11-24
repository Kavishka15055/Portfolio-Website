"use client";

import React from "react";
import { FaReact, FaJava, FaJs, FaNode, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSpringboot, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" />, level: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 88 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" />, level: 85 },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" />, level: 80 },
        { name: "Node.js", icon: <FaNode className="text-green-600" />, level: 75 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 75 },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" />, level: 70 },
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 w-full relative z-10 bg-gray-50 dark:bg-dark/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-linear-to-r from-primary to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "RESTful APIs", "Microservices", "Agile Methodology", 
              "Problem Solving", "Team Collaboration", "Code Review",
              "Testing", "Debugging", "Performance Optimization"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;