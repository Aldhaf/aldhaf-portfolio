"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const [pdfFilePath, setPdfFilePath] = useState(null);

  useEffect(() => {
    setPdfFilePath("/assets/aldhaf-cv.pdf");
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "aldhaf-cv.pdf"; // Set the desired filename
    link.click();
  };

  return (
    <section className="h-full pb-20">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello i'm <br />{" "}
              <span className="text-accent">Aldhaf Fadlilah</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I have a proven track record in crafting digital experiences and
              am highly proficient in a range of programming languages and
              technologies. As a recent IT graduate, I bring a strong foundation
              in software development and a passion for learning and adapting to
              new challenges.
            </p>
            {/* button and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
                disabled={!pdfFilePath}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
