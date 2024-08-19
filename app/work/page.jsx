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
    category: "frontend",
    title: "project 1",
    description:
      "This website is the last project of a group of 4 people from a training course that I took, specifically a bootcamp Website Development Course (Node.js) with the theme of an inviting coronavirus website. public break the spread of corona virus. This website uses HTML and CSS with javascript, Node.js and SQL back-end to store the database",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Aldhaf/C04_website",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "TendorNet website is the final project of a 4-member group web design and programming course with the topic internet provider website. This site uses PHP & CSS front-end and FULL REST API back-end with Postman and PHPMyAdmin to store database for data hosting and free hosting with localhost",
    stack: [
      { name: "PHP" },
      { name: "Css 3" },
      { name: "Bootsrap" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Aldhaf/TendorNet-Project",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Tendor Komputer application is the final project of the object-oriented programming course of a group of 4 members with the topic of selling computer components. This application uses Netbeans IDE with JAVA GUI front-end, store data using SQL phpmyadmin and java as logic",
    stack: [{ name: "JAVA" }, { name: "MySQL" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/Aldhaf/tendor-komputer-project",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description:
      "This is a game education course project based on MBKM (Freedom Learns Independent Campus) program, specifically PMM (Free Student Exchange). For this project, I need to create educational applications such as quizzes, games, and websites. This application uses Netbeans IDE software with Java GUI as frontend and backend",
    stack: [{ name: "Java" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/Aldhaf/GameEducation",
  },
  {
    num: "05",
    category: "fullstack",
    title: "project 5",
    description:
      "HabitHero is the final project of the 2-member group Platform Programming course with the topic Habit Tracker. This app is built with Android Studio using Firebase (Firestore, Firebase Cloud Messaging, Firebase Authentication), Firebase Auth for login and registration, Firestore for data storage, Fire Cloud Messaging for displaying reminder messages",
    stack: [{ name: "Kotlin" }, { name: "Firebase" }],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/Aldhaf/HabitHero",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 6",
    description:
      "Huang He Group is a Singapore-based consulting company that offers many services and is run by professionals. I created this website 100% using Wordpress with a process of about 1 month and during the work of this website I have researched many references so that this website is user friendly and can reach users.",
    stack: [{ name: "Wordpress" }],
    image: "/assets/work/thumb6.png",
    live: "https://hhgrp.asia/",
    github: "",
  },
  {
    num: "07",
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
    num: "08",
    category: "frontend",
    title: "project 8",
    description:
      "Legatcy Recruitment is a recruitment service provider that goes above and beyond to become a trusted and long-term talent partner for your organization. This website was created 100% with Wordpress with the aim that users who are looking for employees can easily reach this website, therefore an individual website was created for Legatcy Recruitment with less than 1 month of work and reference research from many sources.",
    stack: [{ name: "Wordpress" }],
    image: "/assets/work/thumb8.png",
    live: "https://legatcyrecruitment.com",
    github: "",
  },
  {
    num: "09",
    category: "frontend",
    title: "project 9",
    description:
      "Adult Wellness Asia is an adult show program held by Huang He Group Company, with careful consideration by the company, this event was finally made sensual with an elegant concept held at the Singapore Expo. This website was created using Dorik (all-in-one no code website building platform) with about 3 months of work.",
    stack: [{ name: "Dorik" }],
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
