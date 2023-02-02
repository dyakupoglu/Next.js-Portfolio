import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center top-[52px]">
      <div className="absolute border border-[#80d70d]/70 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          height: 300,
          width: 300,
        }}
        transition={{
          duration: 2,
        }}
        className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52"
      />
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          height: 500,
          width: 500,
        }}
        transition={{
          duration: 2,
        }}
        className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="absolute border border-[#80d70d] rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-20"
      />
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          height: 800,
          width: 800,
        }}
        transition={{
          duration: 2,
        }}
        className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52"
      />
    </div>
  );
}
