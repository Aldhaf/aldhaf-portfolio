"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "Building responsive, high-performance web applications using modern stacks like Next.js, Laravel, and React. From low-fidelity wireframes to high-fidelity deployment, I ensure pixel-perfect execution.",
    href: "https://github.com/Aldhaf",
  },
  {
    num: "02",
    title: "IT Infrastructure & Operations",
    description:
      "Expert in managing complex IT ecosystems. Services include server administration (Linux/Windows), network optimization, hardware troubleshooting, and ensuring enterprise-grade data security.",
    href: "",
  },
  {
    num: "03",
    title: "IT Data Analytics & Automation",
    description:
      "Turning raw data into actionable insights using Python, SQL, and Tableau. I also automate repetitive business workflows using Google Apps Script to boost operational efficiency.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          // Perubahan Layout: Menggunakan Grid
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                // Perubahan Style: Card dengan Border & Background
                className="bg-[#232329] p-6 rounded-xl border border-white/10 hover:border-accent transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 flex flex-col justify-between group"
              >
                <div>
                  {/* Terminal Header Decoration (Titik Merah/Kuning/Hijau) */}
                  <div className="flex gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-[#ff605c] border border-transparent group-hover:bg-[#ff605c]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd44] border border-transparent group-hover:bg-[#ffbd44]" />
                    <span className="w-3 h-3 rounded-full bg-[#00ca4e] border border-transparent group-hover:bg-[#00ca4e]" />
                  </div>

                  {/* Header: Number & Arrow */}
                  <div className="w-full flex justify-between items-center mb-4">
                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-2xl" />
                    </Link>
                  </div>

                  {/* Title */}
                  <h2 className="text-[28px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500 mb-4">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-white/60 text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Bottom Line (Opsional: Baris Code) */}
                <div className="border-b border-white/10 w-full mt-6 group-hover:border-accent/50 transition-all duration-500"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;