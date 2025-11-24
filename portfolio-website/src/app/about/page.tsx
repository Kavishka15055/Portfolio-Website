"use client";

import React from "react";
import Image from "next/image";
import { FaCode, FaLightbulb, FaUsers, FaGraduationCap } from "react-icons/fa";

const About = () => {
  

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 w-full relative z-10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl">
                <Image
                  src="/profile.avif"
                  alt="Kavishka Piyumal"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-xl -z-10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                Hello! I'm <span className="text-primary">Kavishka Piyumal</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a multi-tasking software developer with strong expertise in React and Java. 
                I am driven by a deep passion for software development and a desire to continually learn. 
                I am passionate about solving complex problems and am eager to contribute to the success 
                of a team by coming up with new ideas and utilizing my collaborative skills. 
                My goal is to apply my technical expertise and collaborative skills to create meaningful 
                solutions while further developing my knowledge and capabilities in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;