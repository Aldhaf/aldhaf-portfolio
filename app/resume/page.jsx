"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaJava,
  FaLaravel,
  FaPython,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiTableau,
  SiOdoo,
  SiGoogleappsscript,
  SiDocker,
} from "react-icons/si";

// About Data (Bento Grid Version)
const about = {
  title: "About Me",
  description:
    "Informatics Engineering graduate bridging the gap between robust IT operations and modern software development. I build scalable applications while ensuring infrastructure reliability.",
  info: [
    { fieldName: "Name", fieldValue: "Aldhaf Fadlilah" },
    { fieldName: "Phone", fieldValue: "(+62) 877 7930 7421" },
    { fieldName: "Experience", fieldValue: "1.5+ Years (Pro)" },
    { fieldName: "Nationality", fieldValue: "Indonesia" },
    { fieldName: "Email", fieldValue: "aldhaftims06@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Indonesian, English" },
  ],
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "A blend of technical support, full-stack development, and data analysis roles.",
  items: [
    {
      company: "PT Kreasi Arduo Indonesia (ARTUGO)",
      position: "IT Support Specialist & Web Dev",
      duration: "Sep 2024 - Present",
    },
    {
      company: "Huang He Consultancy Group",
      position: "Web Developer",
      duration: "Aug 2023 - Aug 2024",
    },
    {
      company: "PT GITS Indonesia (MSIB)",
      position: "Data Analyst (Indep. Study)",
      duration: "Aug 2023 - Dec 2023",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Focused on Software Engineering, Data Science, and continuous learning.",
  items: [
    {
      institution: "Universitas YARSI",
      degree: "Bachelor of Informatics Engineering",
      duration: "2020 - 2024",
    },
    {
      institution: "Kampus Merdeka (MSIB)",
      degree: "Certified Data Analyst",
      duration: "Aug 2023 - Dec 2023",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description: "A comprehensive toolkit covering Fullstack Dev, Data Analytics, and IT Ops.",
  skillList: [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <SiOdoo />, name: "Odoo ERP" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "MySQL / SQL" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiGoogleappsscript />, name: "Apps Script" },
    { icon: <FaLinux />, name: "Linux Admin" },
    { icon: <SiDocker />, name: "Docker" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content Area */}
          <div className="min-h-[70vh] w-full">
            
            {/* EXPERIENCE TAB */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-heading">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-4">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] p-6 rounded-xl border border-white/10 hover:border-accent transition-all duration-300 group flex flex-col justify-between"
                        >
                          {/* Terminal Header */}
                          <div className="flex gap-2 mb-4">
                            <span className="w-3 h-3 rounded-full bg-[#ff605c] group-hover:bg-[#ff605c]/80 transition-colors" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd44] group-hover:bg-[#ffbd44]/80 transition-colors" />
                            <span className="w-3 h-3 rounded-full bg-[#00ca4e] group-hover:bg-[#00ca4e]/80 transition-colors" />
                          </div>
                          
                          <span className="text-accent font-primary mb-2">{item.duration}</span>
                          <h3 className="text-xl font-bold font-heading min-h-[50px]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION TAB */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold font-heading">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 pr-4">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] p-6 rounded-xl border border-white/10 hover:border-accent transition-all duration-300 group flex flex-col justify-between"
                        >
                          {/* Terminal Header */}
                          <div className="flex gap-2 mb-4">
                            <span className="w-3 h-3 rounded-full bg-[#ff605c] group-hover:bg-[#ff605c]/80" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd44] group-hover:bg-[#ffbd44]/80" />
                            <span className="w-3 h-3 rounded-full bg-[#00ca4e] group-hover:bg-[#00ca4e]/80" />
                          </div>

                          <span className="text-accent font-primary mb-2">{item.duration}</span>
                          <h3 className="text-xl font-bold font-heading min-h-[50px]">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS TAB */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] h-[548px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold font-heading">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 pr-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center border border-white/5 hover:border-accent transition-all duration-300 group hover:shadow-[0_0_20px_rgba(37,208,255,0.2)]">
                                <div className="text-5xl group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize font-primary">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ABOUT ME TAB (Bento Grid) */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] h-[548px]">
                <h3 className="text-4xl font-bold font-heading">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  {/* Grid Bento Style untuk About Me */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-4">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] p-4 rounded-xl border border-white/5 hover:border-accent/50 transition-all flex flex-col justify-center gap-1"
                        >
                          <span className="text-white/50 text-sm uppercase tracking-wider font-primary">
                            {item.fieldName}
                          </span>
                          <span className="text-lg font-bold text-white">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;