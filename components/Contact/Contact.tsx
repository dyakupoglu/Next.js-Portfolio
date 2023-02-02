import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative h-screen flex justify-evenly items-center flex-col overflow-hidden md:flex-row max-w-full mx-auto text-left z-0 pt-[50px]">
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl absolute">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just you need.{" "}
          <span className="underline decoration-[#80d70d]/70">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="text-[#80d70d] w-7 h-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-[#80d70d] w-7 h-7 animate-pulse" />
            <p className="text-2xl">
              <a href="mailto:dogukan.yakupoglu@gmail.com">
                dogukan.yakupoglu@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#80d70d] w-7 h-7 animate-pulse" />
            <p className="text-2xl">Earth</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>

          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-white py-5 px-10 rounded-md text-black font-bold text-2xl transition-all hover:bg-[#80d70d]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
