import styles from "../scss/app.module.scss";

export default function Rocket() {
  return (
    <div className="">
      <div className="rocket mx-auto   top-[25%]   w-full h-[100vh] overflow-visible  ">
        <div className=" rocket-body   overflow-visible relative ">
          <div className="rocket-right-fin  absolute  "></div>
          <div className="rocket-left-fin   "></div>
          <div className="rocket-window  "> </div>
          <div className="rocket-tail  "></div>
          <div className="rocket-flame"></div>
          <div className="rocket-text  ">
            <span className=" text-[8px] font-medium">MetaLogic</span>
          </div>

          {/* bubbles  160px*/}
          <ul className="absolute  top-[90px]  -z-20 mx-auto  w-full h-full flex items-center justify-center ">
            <li className=" absolute w-40 h-40 left-[50%] top-[50%] -translate-y-[-20%] -translate-x-[50%] bg-white rounded-full -z-10"></li>
            <li className=" absolute w-24 h-24 left-[50%] top-[50%] -translate-y-[-60%] -translate-x-[120%] bg-white rounded-full -z-10"></li>
            <li className=" absolute w-24 h-24 left-[50%] top-[50%] -translate-y-[-80%] -translate-x-[-10%] bg-white rounded-full -z-10"></li>
            {/* rest are animated */}
            <li
              className={` ${styles.pulseOne} absolute     left-[50%] top-[60%]  rounded-full -z-10`}
            ></li>
            <li
              className={` ${styles.pulseTwo} absolute     left-[35%] top-[57%]    rounded-full -z-10`}
            ></li>
            <li
              className={` ${styles.pulseTwo} absolute    left-[35%] top-[67%]    rounded-full -z-10`}
            ></li>
            <li
              className={` ${styles.pulseThree} absolute    left-[30%] top-[67%]    rounded-full -z-10`}
            ></li>
            <li
              className={` ${styles.pulseThree} absolute    right-[30%] top-[67%]    rounded-full -z-10`}
            ></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
