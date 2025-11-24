"use client";

import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          {
            rootMargin: '-50% 0px -50% 0px', // Trigger when 50% of section is visible
            threshold: 0
          }
        );
        
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};