"use client";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const getActiveStyles = (section: string) => {
    return activeSection === section
      ? "text-primary font-semibold"
      : "text-gray-600 dark:text-gray-300 hover:text-primary transition-colors";
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center justify-center text-xl font-bold text-primary cursor-pointer"
          >
            <Image
              src={logo}
              alt="Portfolio Logo"
              width={75}
              height={75}
              className="object-contain"
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-medium cursor-pointer ${getActiveStyles(
                    sectionId
                  )}`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                return (
                  <div
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <button
                      className={`block py-2 cursor-pointer w-full text-left ${getActiveStyles(
                        sectionId
                      )}`}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}
              <div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center py-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="h-5 w-5 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5 mr-2" /> Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
