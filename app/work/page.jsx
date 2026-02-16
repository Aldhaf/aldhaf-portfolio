"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack (CMS)",
    title: "Huang He Consultancy",
    description:
      "A professional corporate website for a Singapore-based consultancy firm. Built entirely on WordPress to ensure easy content management for the client. Focused on SEO optimization, responsive design, and user-friendly navigation to increase client engagement.",
    stack: [{ name: "WordPress" }, { name: "CSS3" }, { name: "PHP" }],
    image: "/assets/work/thumb6.png",
    live: "https://hhgrp.asia/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend Dev",
    title: "CovInfo Portal",
    description:
      "A public health dashboard designed to track Covid-19 vaccination rates and educate users about health protocols. Features real-time data visualization and a clean, accessible UI. Engineered using Node.js backend and a responsive frontend architecture.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Node.js" }, { name: "SQL" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Aldhaf/C04_website",
  },
  {
    num: "03",
    category: "Mobile App",
    title: "HabitHero Tracker",
    description:
      "An Android-based productivity application to help users build and track daily habits. Integrated with Firebase for real-time data syncing, authentication, and Cloud Messaging for push notifications/reminders.",
    stack: [{ name: "Kotlin" }, { name: "Firebase" }, { name: "Android Studio" }],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/Aldhaf/HabitHero",
  },
  {
    num: "04",
    category: "Web Development",
    title: "Adult Wellness Asia",
    description:
      "An event landing page for a large-scale exhibition in Singapore. developed using Dorik (No-code) to meet tight deadlines while maintaining a high-quality, elegant visual design. optimized for high traffic during ticket sales periods.",
    stack: [{ name: "Dorik" }, { name: "UI/UX" }],
    image: "/assets/work/thumb9.png",
    live: "https://adultwellnessasia.com/",
    github: "",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "TendorNet Dashboard",
    description:
      "A comprehensive ISP management dashboard designed to manage customer data and billing. Built with a robust PHP REST API backend and a responsive Bootstrap frontend. Includes database management via MySQL.",
    stack: [{ name: "PHP" }, { name: "Bootstrap" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Aldhaf/TendorNet-Project",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 7",
    description:
      "Defence Collective Singapore is a defence-inspired museum collective that pays homage to Singapore's resolve and determination, and the journey that has brought the nation to where it is today. This application is a collaboration between Huang He Group and Defence Collective Singapore. Created with the aim of making it easier for users to access or visit this place, such as buying tickets or just seeing the DCS activity schedule, with the work of about 5 months and till now it is still under development, my job in making this application is to fill in the content from what has been provided by the client to Wordpress and visualise it to make it look beautiful.",
    stack: [{ name: "Wordpress" }],
    image: "/assets/work/thumb7.png",
    live: "https://apps.apple.com/id/app/mydcs/id6470789751",
    github: "",
  },
  {
    num: "07",
    category: "frontend",
    title: "project 8",
    description:
      "Legatcy Recruitment is a recruitment service provider that goes above and beyond to become a trusted and long-term talent partner for your organization. This website was created 100% with Wordpress with the aim that users who are looking for employees can easily reach this website, therefore an individual website was created for Legatcy Recruitment with less than 1 month of work and reference research from many sources.",
    stack: [{ name: "Wordpress" }],
    image: "/assets/work/thumb8.png",
    live: "https://legatcyrecruitment.com",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
