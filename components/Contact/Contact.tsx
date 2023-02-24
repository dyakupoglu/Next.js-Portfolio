import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dogukan.yakupoglu@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    console.log(formData);
  };

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
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
