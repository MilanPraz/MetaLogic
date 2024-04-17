"use client";
import { motion } from "framer-motion";

export default function Vacancies() {
  return (
    <>
      <section className=" overflow-hidden">
        <div className=" py-24  text-center flex flex-col gap-4">
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" text-xl font-semibold text-yellow-500"
          >
            Opportunities
          </motion.h5>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=" text-4xl font-bold text-dark-blue-text"
          >
            Available Vacancies
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 px-2 md:mx-auto md:w-[50%]"
          >
            <input
              type="text"
              name="job"
              placeholder="Job Title/Keyword"
              className="flex-1   rounded-lg border p-2 focus:outline-none"
            />
          </motion.div>

          <div className="mx-auto lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="px-2 py-4 text-lg font-semibold">2 Job Offers</h3>
            </motion.div>
            <div className=" pb-10">
              <div className=" relative w-full overflow-auto">
                <table className=" w-full caption-bottom text-sm">
                  <tbody className="">
                    <motion.tr
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className=" border-b transition-colors hover:bg-[#fafafa]"
                    >
                      <td className=" p-2 align-middle  font-semibold">
                        {" "}
                        Frontend Intern &#40;Mern Stack&#41;
                        <br />
                        <span className=" text-sm font-normal text-blue-500">
                          {" "}
                          ( 219 applicants )
                        </span>
                      </td>
                      <td className=" p-2 align-middle">Full Time</td>
                      <td className=" p-2 align-middle">Lalitpur, Kathmandu</td>
                      <td className=" p-2 align-middle text-right">
                        {" "}
                        <span className=" flex items-center justify-center gap-1 rounded-full bg-red-100 px-2 py-1 font-medium text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-dot "
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="1"></circle>
                          </svg>
                          Closed{" "}
                        </span>
                      </td>
                    </motion.tr>
                    <motion.tr
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className=" border-b transition-colors hover:bg-[#fafafa]"
                    >
                      <td className=" p-2 align-middle  font-semibold">
                        {" "}
                        Marketing Executive
                        <br />
                        <span className=" text-sm font-normal text-blue-500">
                          {" "}
                          &#40;2 applicants &#41;
                        </span>
                      </td>
                      <td className=" p-2 align-middle">Full Time</td>
                      <td className=" p-2 align-middle">
                        Nepal &#40;with potential for international travel&#41;
                      </td>
                      <td className=" p-2 align-middle text-right">
                        {" "}
                        <a
                          href="#"
                          className=" inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8 border-red-600 text-red-600"
                        >
                          Apply
                        </a>
                      </td>
                    </motion.tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" py-20 text-center">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-dark-blue-text"
              >
                Subscribe to our News Letters
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className=" py-4  md:mx-auto md:w-[70%]"
              >
                Stay informed, inspired, and equipped with the latest trends and
                breakthroughs in your field.
              </motion.p>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                action="#"
                className=" flex flex-col gap-4 px-4 py-3 sm:flex-row md:flex-row md:mx-auto md:w-[70%]"
              >
                <div className=" flex-1">
                  <input
                    className="flex h-9 w-full rounded-md border border-input px-3 text-sm shadow-sm transition-colors    placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-white py-6"
                    placeholder="Please Enter Your Email"
                    name="email"
                  ></input>
                </div>
                <button className=" flex h-fit items-center gap-2 rounded-lg bg-red-400 px-4 py-3 text-white">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail "
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Subscribe
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
