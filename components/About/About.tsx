import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import profilePic from "../../images/simon_ghost_riley.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen relative flex flex-col justify-evenly items-center text-center mx-auto max-w-7xl px-10 pt-[50px]">
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl absolute">
        About
      </h3>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        className="flex flex-col xl:flex-row justify-evenly items-center text-center mx-auto max-w-7xl px-10"
      >
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative flex justify-evenly items-center flex-shrink-0 mb-5"
        >
          <Image
            src={profilePic}
            alt="about_pic_1"
            className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"
          />
        </motion.div>

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#80d70d]/70">little</span>{" "}
            background.
          </h4>
          <p className="text-base overflow-auto max-h-[300px] md:max-h-[350px] xl:max-h-[600px]">
            ☪Long Man🛐 ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus illo harum deleniti incidunt vero quos eum enim facilis
            repellat sapiente fugit, modi ratione possimus odit. In voluptatum
            omnis fugiat aperiam! Inventore mollitia, quis fugiat facilis,
            maiores ad animi expedita sit ipsam harum quidem id repudiandae vero
            quas repellendus obcaecati adipisci enim. Maiores dicta harum
            temporibus natus saepe placeat sed nemo! Voluptas aliquid in tempora
            explicabo distinctio mollitia delectus facilis deserunt asperiores
            atque tempore corrupti doloribus culpa possimus consectetur hic,
            pariatur natus illum. Possimus dolor excepturi officia fugiat quas,
            doloremque minus. Cum ratione voluptas autem necessitatibus in alias
            sequi reiciendis reprehenderit enim accusamus aperiam, eius ex
            molestiae consectetur eaque hic totam illo nihil. Officiis dolore
            nostrum ut repudiandae error non vel. Quod vitae commodi minima
            doloribus tempora in accusantium consequatur consequuntur,
            doloremque deleniti cumque voluptatum. Consequatur consequuntur
            adipisci beatae, pariatur eligendi itaque, molestias nisi nihil
            totam cum voluptatem, accusamus quibusdam qui!Quod vitae commodi
            minima doloribus tempora in accusantium consequatur consequuntur,
            doloremque deleniti cumque voluptatum. Consequatur consequuntur
            adipisci beatae, pariatur eligendi itaque, molestias nisi nihil
            totam cum voluptatem, accusamus quibusdam qui!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
