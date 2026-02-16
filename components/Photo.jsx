"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image Container dengan Animasi Melayang (Floating) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            y: [0, -15, 0], // Bergerak naik turun 15 pixel
          }}
          transition={{
            duration: 6, // Durasi satu siklus naik-turun (6 detik)
            repeat: Infinity, // Ulangi selamanya
            repeatType: "reverse", // Bolak-balik (naik lalu turun)
            ease: "easeInOut",
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png" // Pastikan path foto benar
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        {/* Lingkaran Berputar (Rotating Circle) */}
        {/* Atomic Gyroscope Animation */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lingkaran Luar (Berputar Searah Jarum Jam) */}
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#25d0ff" // Warna Aksen Utama (Cyan/Hijau)
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          {/* Lingkaran Dalam (Berputar Berlawanan Arah & Lebih Cepat) */}
          <motion.circle
            cx="253"
            cy="253"
            r="235" // Radius lebih kecil
            stroke="#ffffff" // Warna Putih (agar kontras)
            strokeWidth="2" // Lebih tipis
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "10 20 10 20" }} // Pola putus-putus beda
            animate={{
              strokeDasharray: ["20 10 20 10", "10 50 10 50"],
              rotate: [360, 0], // Putar balik (Counter-clockwise)
            }}
            transition={{
              duration: 15, // Lebih cepat
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;