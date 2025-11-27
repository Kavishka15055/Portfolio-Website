"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import DarkVeil from "../ui/DarkVeil";

const Hero = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <DarkVeil>
    <section className="px-2 sm:px-1 md:px-1.5 lg:px-2 pt-20 sm:pt-15 md:pt-18 lg:pt-20 ">
      <div className="max-w-3xl mx-auto text-center ">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/profile.avif"
            alt="profile image"
            width={128}
            height={128}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Kavishka Piyumal</span>
        </h1>
        <div className="h-10">
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Mobile Developer",
              2000,
              "Fullstack Developer",
              2000,
              "QA Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={40}
            className="text-2xl md:text-4xl font-semibold  mt-2 block"
            repeat={Infinity}
            cursor={false}
          />
        </div>

        <div className="flex justify-center space-x-4 mb-8 mt-8">
          <Link
            href="https://www.linkedin.com/in/piyumal-gunawardhana-438452285/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaLinkedin />
          </Link>
          {/* <Link
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaTwitter />
          </Link> */}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link 
          href="#projects" 
          className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/70 transition-colors">
            View Projects
          </Link>


          <Link 
          href="#contact" 
          className="bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
    </DarkVeil>
    </div>
  );
};

export default Hero;
