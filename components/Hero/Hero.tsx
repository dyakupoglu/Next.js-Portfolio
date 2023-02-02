import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import profilePic from "../../images/simon_ghost_riley.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Doğukan.",
      "Guy-who-loves-Engineering.tsx",
      "<ButLoves-İlayda❤Türk-More/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen pt-[100px] space-y-8 flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <Image
          src={profilePic}
          alt="Picture of the author"
          className="relative rounded-full h-[250px] w-[250px] mx-auto object-cover"
        />
      </motion.div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-green-500 pb-2 tracking-[15px]">
          Mechatronics Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#80d70d" />
        </h1>
      </div>
    </div>
  );
}
