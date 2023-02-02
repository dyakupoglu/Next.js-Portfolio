import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import profilePic from "../../images/simon_ghost_riley.jpg";

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="relative group flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        // className="relative group flex cursor-pointer"
      >
        <Image
          src={profilePic}
          alt="skills"
          className="rounded-full border object-cover w-16 h-16 md:w-36 md:h-36 xl:w-32 xl:h-32 filter group-hover:scale-125 transition duration-300 ease-in-out hover:border-[#80d70d]"
        />
      </motion.div>
      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </div>
  );
}
