"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web and App Development",
    description:
      "I am an experienced developer with a proven track record in creating simple Android applications and simple websites using HTML, CSS, and JavaScript. I have successfully managed over three website projects and consistently deliver innovative visual solutions that enhance the user experience.",
    href: "https://github.com/Aldhaf",
  },
  {
    num: "02",
    title: "Data Analyst",
    description:
      "As a Data Analyst Mentee at PT GITS Indonesia, I have experience building data visualizations to analyze sales trends in MSMEs. My expertise in data analysis allows me to support better, data-driven decision making and provide valuable insights for business planning.",
    href: "https://github.com/Aldhaf",
  },
  {
    num: "03",
    title: "IT Support",
    description:
      "I am a highly proficient IT professional with extensive experience in managing and maintaining complex IT infrastructure. I am skilled in troubleshooting hardware and software issues and ensuring the security of organizational data. I am an expert in providing direct technical support to teams and users, both for day-to-day issues and special projects. I am a skilled website developer and manager. I am adept at implementing efficient and responsive IT solutions that support the smooth operation of the entire organization.",
    href: "https://github.com/Aldhaf",
  },
  {
    num: "04",
    title: "Wordpress Developer",
    description:
      "I am a proficient website developer and manager, with expertise in WordPress and other no-code platforms. I have successfully managed over three website projects, including customizing themes and plugins to enhance functionality and user experience. I implement responsive design and attractive visuals. I have a proven ability to find innovative technical solutions to meet client needs and ensure optimal site performance.",
    href: "https://github.com/Aldhaf",
  },
];

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-12 ">
      <div className="container mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
