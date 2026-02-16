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
    category: "Mobile App (2024)",
    title: "ArtuGo HR System",
    description:
      "A comprehensive mobile HRIS application designed to streamline employee management at PT Kreasi Arduo Indonesia. Features include real-time GPS attendance tracking, leave request management, and secure digital payslip access. Integrated with a robust Laravel API backend to ensure seamless data synchronization between mobile users and the central database.",
    stack: [{ name: "Flutter" }, { name: "GetX" }, { name: "Python (Odoo)" }, { name: "Firebase" }],
    image: "/assets/work/thumb_artugo.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "ERP Module (2025)",
    title: "ATG Helpdesk (Odoo)",
    description:
      "A custom-developed Odoo 12 module ('atg_helpdesk') engineered to modernize internal IT support ticketing. This module enables automated ticket routing, IT asset linking, and status tracking within the company's ERP ecosystem. Built using Python and XML, it significantly reduces issue resolution time by centralizing support requests.",
    stack: [{ name: "Python" }, { name: "XML" }, { name: "PostgreSQL" }, { name: "Odoo" }],
    image: "/assets/work/thumb_helpdesk.png", 
    live: "",
    github: "", 
  },
  {
    num: "03",
    category: "Fullstack CMS (2024)",
    title: "Huang He Consultancy",
    description:
      "A professional corporate website for a Singapore-based consultancy firm. Built entirely on WordPress to ensure easy content management for the client. Focused on SEO optimization, responsive design, and user-friendly navigation to increase client engagement.",
    stack: [{ name: "WordPress" }, { name: "CSS3" }, { name: "PHP" }],
    image: "/assets/work/thumb6.png",
    live: "https://hhgrp.asia/",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack (2023)",
    title: "TendorNet Dashboard",
    description:
      "A comprehensive ISP management dashboard designed to manage customer data and billing. Built with a robust PHP REST API backend and a responsive Bootstrap frontend. Includes database management via MySQL.",
    stack: [{ name: "PHP" }, { name: "Bootstrap" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Aldhaf/TendorNet-Project",
  },
  {
    num: "05",
    category: "Frontend Dev (2023)",
    title: "Defence Collective SG",
    description:
      "A digital gateway for Singapore's defence museum collective, designed to streamline ticket bookings and visitor schedules. Over a 5-month period, I managed the end-to-end content integration and visual structuring on WordPress, transforming client resources into an engaging interface.",
    stack: [{ name: "WordPress" }, { name: "UI Design" }],
    image: "/assets/work/thumb7.png",
    live: "https://apps.apple.com/id/app/mydcs/id6470789751",
    github: "",
  },
  {
    num: "06",
    category: "Web Dev (2024)",
    title: "Legatcy Recruitment",
    description:
      "A dedicated corporate portal for a recruitment agency, built to connect employers with talent efficiently. Developed on WordPress with a focus on rapid deployment and high availability, ensuring a professional online presence was established within a tight timeline.",
    stack: [{ name: "WordPress" }, { name: "SEO" }],
    image: "/assets/work/thumb8.png",
    live: "https://legatcyrecruitment.com",
    github: "",
  },
  {
    num: "07",
    category: "Frontend Dev (2023)",
    title: "CovInfo Portal",
    description:
      "A public health dashboard designed to track Covid-19 vaccination rates and educate users about health protocols. Features real-time data visualization and a clean, accessible UI. Engineered using Node.js backend and a responsive frontend architecture.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Node.js" }, { name: "SQL" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Aldhaf/C04_website",
  },
  {
    num: "08",
    category: "Mobile App (2023)",
    title: "HabitHero Tracker",
    description:
      "An Android-based productivity application to help users build and track daily habits. Integrated with Firebase for real-time data syncing, authentication, and Cloud Messaging for push notifications/reminders.",
    stack: [{ name: "Kotlin" }, { name: "Firebase" }, { name: "Android Studio" }],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/Aldhaf/HabitHero",
  },
  {
    num: "09",
    category: "No-Code Dev (2024)",
    title: "Adult Wellness Asia",
    description:
      "An event landing page for a large-scale exhibition in Singapore. Developed using Dorik to meet tight deadlines while maintaining a high-quality, elegant visual design. Optimized for high traffic handling during ticket sales periods.",
    stack: [{ name: "Dorik" }, { name: "UI/UX" }],
    image: "/assets/work/thumb9.png",
    live: "https://adultwellnessasia.com/",
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
