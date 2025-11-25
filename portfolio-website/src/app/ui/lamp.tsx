"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden dark:bg-slate-950 bg-gray-200 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-120 bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-full left-0 dark:bg-slate-950 bg-gray-200 h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-full left-0 dark:bg-slate-950 bg-gray-200  bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-120 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-full right-0 dark:bg-slate-950 bg-gray-200  bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-full right-0 dark:bg-slate-950 bg-gray-200 h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 dark:bg-slate-950 bg-gray-200 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-18 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-50 -translate-y-1/2 rounded-full dark:bg-cyan-500 bg-zinc-600 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-gray-200 dark:bg-primary blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-120 -translate-y-28 bg-primary "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-50 dark:bg-slate-950 bg-slate-400"></div>
      </div>

      {/* FIXED: Reduced translation from -translate-y-80 to -translate-y-40 */}
      <div className="relative z-50 flex translate-y-5 sm:-translate-y-25 md:-translate-y-30 lg:-translate-y-20 flex-col items-center px-5 -mt-4 ">
        {children}
      </div>
    </div>
  );
};