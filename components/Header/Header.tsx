import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-3 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* Header Left */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        id="header-left"
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>

      {/* Header Middle */}
      <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>

      {/* Header Right */}
      <motion.div
       initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
    }}
        id="header-right"
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-white">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
