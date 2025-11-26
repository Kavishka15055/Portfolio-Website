"use client";

import React from "react";
import Image from "next/image";
import {
  FaCode,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
import Blob from "../ui/Blob";

const About = () => {
  const education = [
    {
      degree: "G.C.E. Advance Level",
      institution: "Royal College Horana,Physical Science Stream",
      duration: "2011 - 2022",
      location: "Horana, Sri Lanka",
      description: "",
    },
    {
      degree: "BSc.Hons.in Computing & Information Systems(Reading),",
      institution: "Sabaragamuwa University of Sri Lanka",
      duration: "2021",
      location: "Belihuloya, Sri Lanka",
      description: "",
    },
  ];

  const workExperience = [
    {
      position: "Quality Assurance Technician",
      company: "Global System Solutions International",
      duration: "2022 - 2024",
      location: "Nugegoda, Sri Lanka",
      description: "",
      technologies: "",
    },
    // {
    //   position: "Java Developer Trainee",
    //   company: "CodeCraft Academy",
    //   duration: "2022 - 2023",
    //   location: "Remote",
    //   description:
    //     "Built enterprise applications using Java and Spring Boot. Learned software development best practices and participated in code reviews.",
    //   technologies: ["Java", "Spring Boot", "MySQL", "Maven"],
    // },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-20 lg:py-24 w-full relative z-10"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center bg-linear-to-br bg-clip-text ">
          About Me
        </h2>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ">
          {/* Image Section with Blob Background */}
          <div className="flex justify-center lg:justify-start ">
            <div className="relative">
              {/* Blob Background */}
              <div className="absolute inset-0 -z-10">
                <Blob containerStyles="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] lg:w-[530px] lg:h-[530px] opacity-100" />
              </div>

              {/* Profile Image */}
              <div className="relative z-10  overflow-hidden ">
                <Image
                  src="/profile.png"
                  alt="Kavishka Piyumal"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                Hello! I'm{" "}
                <span className="text-primary">Kavishka Piyumal</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                I am a multi-tasking software developer with strong expertise in
                React and Java. I am driven by a deep passion for software
                development and a desire to continually learn. I am passionate
                about solving complex problems and am eager to contribute to the
                success of a team by coming up with new ideas and utilizing my
                collaborative skills. My goal is to apply my technical expertise
                and collaborative skills to create meaningful solutions while
                further developing my knowledge and capabilities in the field.
              </p>
            </div>
          </div>
        </div>

        {/* Education and Work Experience Section */}
{/* Education and Work Experience Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-18 border-cyan-500/20">
  {/* Education Block */}
  <LampContainer className="border rounded-2xl border-gray-200 dark:border-gray-700">
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="w-full max-w-4xl"
    >
      <div className="p-8  sm:w-60 md:w-62 lg:w-110"> {/* Changed from p-11 to p-8 to match Work Experience */}
        <div className="flex items-center mb-12">
          <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
            <FaGraduationCap className="text-primary text-2xl" />
          </div>
          <h3 className="text-2xl font-bold">Education</h3>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-cyan-400/30"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>

              <h4 className="text-xl font-bold dark:text-white mb-2">
                {edu.degree}
              </h4>

              <p className="text-lg font-semibold text-primary mb-3">
                {edu.institution}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm dark:text-gray-300 mb-3">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {edu.duration}
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {edu.location}
                </div>
              </div>

              <p className="dark:text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </LampContainer>

  {/* Work Experience Block - Fixed to align with Education */}
  <LampContainer className="border rounded-2xl border-gray-200 dark:border-gray-700">
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="w-full max-w-4xl" 
    >
      <div className="p-8   mb-60  sm:mb-35 md:mb-40 lg:mb-42   sm:w-60 md:w-62 lg:w-110 "> 
        <div className="flex items-center mb-12">
          <div className="bg-cyan-500/20 p-3 rounded-full mr-4">
            <FaBriefcase className="text-primary text-2xl" />
          </div>
          <h3 className="text-2xl font-bold">Work Experience</h3> 
        </div>

        <div className="space-y-8">
          {workExperience.map((work, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-cyan-400/30"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>

              <h4 className="text-xl font-bold dark:text-white mb-2">
                {work.position}
              </h4>

              <p className="text-lg font-semibold text-primary mb-3">
                {work.company}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm dark:text-gray-300 mb-3">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {work.duration}
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  {work.location}
                </div>
              </div>

              <p className="dark:text-gray-300 leading-relaxed mb-4">
                {work.description}
              </p>

              {/* Technology tags for work experience */}
              {/* <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </LampContainer>
</div>

        {/* Call to Action */}
        {/* <div className="flex justify-center mt-16">
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Interested in working together? Let's build something amazing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/70 transition-colors font-medium"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
