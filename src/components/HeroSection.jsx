import React, { useState, useEffect } from "react";
import DownloadButton from "./UI/DownloadButton";
import appleStore from "../assets/apple-store.svg";
import playStore from "../assets/playstore.svg";
import { motion } from "framer-motion";

import { containerVariants } from "../motion";

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [appleStore, playStore];

  useEffect(() => {
    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate={imagesLoaded ? "visible" : "hidden"}
      id="about"
      className="hero-section"
    >
      <motion.div className="hero-content">
        <motion.h1 className="hero-title" variants={childVariants}>
          EasyCookAI
        </motion.h1>
        <motion.p className="hero-title-subtext" variants={childVariants}>
          Your personal AI culinary assistant
        </motion.p>
        <motion.div className="download-btn-wrapper" variants={childVariants}>
          <DownloadButton icon={playStore} text={"Download on Google Play"} />
          <DownloadButton icon={appleStore} text={"Download on App Store"} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
