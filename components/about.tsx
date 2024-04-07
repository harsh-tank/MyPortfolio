"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently Pursuing Masters of Applied Computer Science at Concordia University.{" "}
        I am a Full Stack Developer with 1 year of Professional Experience.{" "}My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB using TypeScript
        </span>
        .
        <span className="italic">{" "}My favorite part of programming</span> is the
        problem-solving aspect. I am currently looking for a{" "}
        <span className="font-medium">Internship</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        cricket, watching webseries, and going out with my friends. I <span className="underline">love</span> doing Competitive Programming. I regularly participate in Contests on platforms like <span className="font-medium">Codeforces, LeetCode</span> 
      </p>
    </motion.section>
  );
}
