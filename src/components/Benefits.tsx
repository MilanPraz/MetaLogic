"use client";
import { benefitsArray } from "@/utils/valueCardArray";
import Image from "next/image";
import hands from "../../../public/careers/arrow.png";
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <>
      <section className=" w-full py-24 bg-white">
        {/* INTRO PART */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" flex flex-col gap-4 text-center"
        >
          <h5 className=" text-primary-red font-semibold text-lg">Benefits</h5>
          <h2 className=" text-2xl font-extrabold text-dark-blue-text">
            Life At MetaLogic
          </h2>
        </motion.div>

        {/* GRID PART */}
        <div className=" container  mx-auto px-4 ">
          <div className=" grid      gap-y-8 gap-x-8 justify-items-center  grid-cols-1 sm:grid-cols-1  md:grid-cols-3 md:gap-y-12  lg:grid-cols-4 lg:px-12 md:px-4 text-left     ">
            {benefitsArray?.map((el, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  key={index}
                  className=" self-center   w-full"
                >
                  <Card el={el} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function Card({ el }: { el: ValueCard }) {
  console.log(el);
  return (
    // <div className="">
    <div className=" group  overflow-hidden  flex flex-col gap-3 rounded-2xl  border-transparent p-4  bg-white  transition-all duration-200 hover:border-[1px] hover:border-border-gray hover:shadow-lg ">
      <div className=" w-16  bg-gray-100 rounded-2xl p-4">
        <Image
          className="group-hover:transform group-hover:scale-110 transition-transform duration-150 ease-linear"
          src={el.image}
          height={100}
          width={100}
          alt="book"
        />
      </div>
      {/* </div> */}
      <h3 className=" text-xl text-dark-blue-text font-bold">{el.title}</h3>
      <p className=" text-xs text-gray-text">{el.description}</p>
    </div>
  );
}
