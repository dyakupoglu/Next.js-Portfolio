import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import profilePic from "../../images/simon_ghost_riley.jpg";
import jsIcon from "../../images/javascript_icon.svg";
import firebaseIcon from "../../images/firebase_icon.svg";
import nodejsIcon from "../../images/nodejs_icon.svg";
import reactIcon from "../../images/react_icon.svg";
import typescriptIcon from "../../images/typescript_icon.svg";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[860px] 
    snap-center bg-[#292929] p-0 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
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
        className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
      >
        <Image
          src={profilePic}
          alt="Company"
          priority={true}
          className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">President of the Turkey</h4>
        <p className="font-bold text-2xl mt-1">Turkey</p>
        <div className="flex flex-row space-x-2 my-2">
          <Image
            src={jsIcon}
            alt="Technology"
            priority={true}
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={typescriptIcon}
            alt="Technology"
            priority={true}
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={reactIcon}
            alt="Technology"
            priority={true}
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={nodejsIcon}
            alt="Technology"
            priority={true}
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={firebaseIcon}
            alt="Technology"
            priority={true}
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points. Summary Points. Summary Points.</li>
          <li>Summary Points. Summary Points. Summary Points.</li>
          <li>Summary Points. Summary Points. Summary Points.</li>
          <li>Summary Points. Summary Points. Summary Points.</li>
          <li>Summary Points. Summary Points. Summary Points.</li>
        </ul>
      </div>
    </article>
  );
}
