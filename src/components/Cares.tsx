"use client";
import { motion } from "framer-motion";
import hands from "../../public/careers/hands.png";

import Image from "next/image";
import { caresArray } from "@/utils/valueCardArray";

export default function Cares() {
  return (
    <>
      <section className=" bg-[#ffffe1]">
        <div className=" container mx-auto">
          <div className=" py-16 grid md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=" flex flex-col pb-10 px-6 gap-4"
            >
              <h2 className="  text-3xl font-extrabold text-dark-blue-text">
                Metalogic Cares For You
              </h2>
              <p className=" text-sm text-gray-text">
                We&#39;re less about valuing perks and more about valuing
                people. Our employee benefits are built around enhancing your
                wellbeing - at work and at home
              </p>
            </motion.div>
            <div className=" col-span-2 grid md:grid-cols-3 px-2 gap-y-8 md:gap-y-6 md:px-4  lg:px-12 w-[80%] ml-[12%] text-left">
              {caresArray.map((el, index) => {
                return (
                  <div key={index}>
                    <Card el={el} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Card({ el }: { el: CareCard }) {
  return (
    <>
      <div className=" flex h-[200px] w-[200px]  flex-col items-start rounded-2xl bg-[#fffff6] px-6 py-12 shadow-md gap-3 group">
        <Image
          className=" w-10 group-hover:transform  transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:-rotate-6"
          src={el.image}
          height={100}
          width={100}
          alt="hand"
        />
        <h3 className=" font-semibold text-gray-text">{el.title}</h3>
      </div>
    </>
  );
}
