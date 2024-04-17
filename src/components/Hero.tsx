"use client";
import { motion } from "framer-motion";
import styles from "../scss/app.module.scss";

export default function Hero() {
  return (
    <section className=" relative rocket-container w-full h-[100vh] overflow-hidden  ">
      <div className=" overflow-hidden absolute z-[999]  min-h-screen w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col absolute z-[999] "
        >
          <motion.p className=" font-semibold leading-7 py-6 text-lg text-center">
            Careers
          </motion.p>

          <p className=" text-3xl sm:text-[55px] text-center font-bold leading-[4rem]">
            Navigate Your Next
            <br />{" "}
            <span className=" text-primary-green leading-[4rem]">Career </span>
            Move
          </p>
          <p className="mx-auto text-center py-10 md:w-[50%]">
            We&#39;re continiously searching for the right talent. Check if
            you&#39;re a good match.{" "}
          </p>
          <button className=" font-medium text-white bg-primary-dark-blue w-fit mx-auto px-6 whitespace-nowrap py-3 rounded-md text-sm">
            Explore Opportunities
          </button>
        </motion.div>

        {/* stars */}
        <div className=" absolute text-white top-20">+</div>
        <div className=" absolute text-white top-40 left-60">+</div>
        <div className=" absolute text-white top-60 left-80 -z-10">+</div>
        <div className=" absolute text-white top-72 left-[600px] -z-10">+</div>
        <div className=" absolute text-white top-72 left-[500px] -z-10">+</div>
        <div className=" absolute text-white top-[200px] left-[500px] -z-10">
          +
        </div>

        <ul className="absolute   -z-10 mx-auto  w-full h-full overflow-hidden flex items-center justify-center ">
          <li className=" absolute w-40 h-40 left-[50%] top-[50%] -translate-y-[-20%] -translate-x-[50%] bg-white rounded-full -z-10"></li>
          <li className=" absolute w-24 h-24 left-[50%] top-[50%] -translate-y-[-60%] -translate-x-[120%] bg-white rounded-full -z-10"></li>
          <li className=" absolute w-24 h-24 left-[50%] top-[50%] -translate-y-[-80%] -translate-x-[-10%] bg-white rounded-full -z-10"></li>
          {/* rest are animated */}
          <li
            className={` ${styles.pulseOne} absolute    left-[50%] top-[60%]  rounded-full -z-10`}
          ></li>
          <li
            className={` ${styles.pulseTwo} absolute   left-[35%] top-[57%]    rounded-full -z-10`}
          ></li>
          <li
            className={` ${styles.pulseTwo} absolute   left-[35%] top-[67%]    rounded-full -z-10`}
          ></li>
          <li
            className={` ${styles.pulseThree} absolute   left-[30%] top-[67%]    rounded-full -z-10`}
          ></li>
          <li
            className={` ${styles.pulseThree} absolute   right-[30%] top-[67%]    rounded-full -z-10`}
          ></li>
        </ul>
      </div>
    </section>
  );
}
