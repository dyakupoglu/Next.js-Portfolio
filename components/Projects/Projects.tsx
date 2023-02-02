import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import profilePic from "../../images/simon_ghost_riley.jpg";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      name: "Project X",
      detail:
        "Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır...",
    },
    {
      name: "Project X",
      detail:
        "Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır...",
    },
    {
      name: "Project X",
      detail:
        "Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır...",
    },
    {
      name: "Project X",
      detail:
        "Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır...",
    },
    {
      name: "Project X",
      detail:
        "Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır... Göklerden gelen bir karar vardır! Kaderin üstünde bir kader vardır...",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative h-screen flex justify-evenly items-center flex-col overflow-hidden md:flex-row max-w-full mx-auto text-left z-0 pt-[50px]"
    >
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl absolute">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen h-screen flex flex-col items-center justify-center flex-shrink-0 snap-center space-y-5 p-20 md:p-44"
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src={profilePic}
                alt="projects"
                className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"
              />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#80d70d]/70">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full h-[500px] top-[30%] bg-[#F7AB0A]/10 left-0 -skew-y-12"></div>
    </motion.div>
  );
}
