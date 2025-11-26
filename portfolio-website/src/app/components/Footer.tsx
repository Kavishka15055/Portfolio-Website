"use client";
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useState } from 'react';

export default function Footer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0  sm:align-center flex flex-col ">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center justify-center text-xl font-bold text-primary cursor-pointer   "
            >
              <Image
                src={logo}
                alt="Portfolio Logo"
                width={75}
                height={75}
                className="object-contain"
              />
            </button>
            <p className="text-sm text-secondary  ml-3">
              © {new Date().getFullYear()}  All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Kavishka15055"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/piyumal-gunawardhana-438452285/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}