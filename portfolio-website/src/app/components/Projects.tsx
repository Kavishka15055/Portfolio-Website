"use client";

import { projects } from "@/src/contents/projects";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="projects"
      className="py-2 md:py-4 lg:py-14 w-full relative z-10  "
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 lg:mb-3 text-center bg-linear-to-br bg-clip-text py-1 sm:py-2 lg:py-3 ">
  Featured Projects
</h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-1 mt-1">
        {projects.map(
          ({ id, title, description, image, githubLink, iconLists }) => (
            <div
              key={id}
              className="sm:h-164  lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw] "
            >
              <PinContainer
                title={title}
                href={githubLink}
                containerClassName="w-full h-full"
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/projects/bg-img.webp" alt="bg-img" />
                  </div>
                  <img
                    src={image}
                    alt={title}
                    className="z-10 absolute bottom-0 w-85 h-58 rotate-8 pt-10"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xs text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xs  lg:font-normal font-light text-sm line-clamp-2  h-15">
                  {description}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className=" flex items-center ">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10  w-8 h-8 flex items-center justify-center shadow-lg"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img
                          src={icon}
                          alt={`icon-${index}`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {/* GitHub Link */}
                  {/* GitHub Link - Only text clickable */}
                  <div className="flex justify-center items-center">
                    <button
                      className="flex items-center lg:text-xl md:text-xs text-sm text-primary hover:text-black dark:hover:text-purple-100 transition-colors cursor-pointer bg-transparent border-none"
                      onClick={(e) => handleLinkClick(e, githubLink)}
                    >
                      GitHub
                      <FaGithub className="ms-2 hover:text-purple-100" color="" />
                    </button>
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>

      {/* View More Button */}
      {/* <div className="flex justify-center mt-12 sm:mt-16">
        <button
          className="px-8 py-3 bg-linear-to-br from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          onClick={() => {
            // Add your view all projects logic here
            console.log("View all projects clicked");
          }}
        >
          View All Projects
        </button>
      </div> */}
    </section>
  );
};

export default Projects;
