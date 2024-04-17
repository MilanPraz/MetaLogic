"use client";
import { valueArray } from "@/utils/valueCardArray";
import book from "../../../public/careers/book.png";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Values() {
  return (
    <>
      <section className=" w-full py-24 bg-[#f6f8ff]">
        {/* INTRO PART */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" flex flex-col gap-4 text-center"
        >
          <h5 className=" text-primary-red font-semibold text-lg">Values</h5>
          <h2 className=" text-3xl font-extrabold text-dark-blue-text">
            We Believe in
          </h2>
          <p className="px-2 pb-8 text-gray-text  text-xs md:w-[50%]  mx-auto">
            We believe in creating an environment where individuals can thrive
            and make a meaningful impact.
          </p>
        </motion.div>

        {/* GRID PART */}
        <div className=" container  mx-auto lg:px-20 ">
          <div className=" grid      gap-y-8 justify-items-center place-content-center grid-cols-1 sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 lg:gap-x-2    justify-center ">
            {valueArray?.map((el, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  key={index}
                >
                  <Container el={el} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function Container({ el }: { el: ValueCard }) {
  console.log(el);
  return (
    <div className=" group  overflow-hidden  w-[360px] flex flex-col gap-3 rounded-2xl bg-white p-8 shadow-lg">
      <div className=" w-16  bg-gray-100 rounded-2xl p-4">
        <Image
          className="group-hover:transform group-hover:-rotate-12 transition-transform duration-150 ease-linear"
          src={el.image}
          height={100}
          width={100}
          alt="book"
        />
      </div>
      <h3 className=" text-xl text-dark-blue-text font-bold">{el.title}</h3>
      <p className=" text-xs text-gray-text">{el.description}</p>
    </div>
  );
}
