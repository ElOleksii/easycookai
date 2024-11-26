import { motion } from "framer-motion";
import SectionTitle from "./UI/SectionTitle";
import girlCooling from "../assets/girl-cooking.png";
import { sectionVariants } from "../motion";

const ValueSection = () => {
  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      className="value-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="value-content-top" variants={childVariants}>
        <SectionTitle text={"Cook Smarter Not Harder"} />
        <p className="value-subtitle">
          EasyCook AI is your innovative kitchen helper, designed to simplify
          cooking and enhance your culinary experience. With personalized
          recipes tailored to the ingredients you already have, and a hands-free
          voice assistant to guide you step-by-step, cooking has never been
          easier.
        </p>
      </motion.div>

      <motion.div className="value-content-block" variants={sectionVariants}>
        <motion.div
          className="value-content-block__left"
          variants={imageVariants}
        >
          <img className="w-full h-auto" src={girlCooling} alt="girl_cooking" />
        </motion.div>

        <motion.div
          className="value-content-block__right"
          variants={childVariants}
        >
          <motion.div
            className="value-content-block-text"
            variants={childVariants}
          >
            <h5 className="value-content-block__text-title">
              What is in Your Fridge?
            </h5>
            <p className="value-content-block__text">
              Don’t stress over what to cook! <br /> Simply let EasyCook AI know
              what ingredients are available. It will scan your fridge and
              pantry to suggest delicious meals you can make right away.
            </p>
          </motion.div>

          <motion.div
            className="value-content-block-text"
            variants={childVariants}
          >
            <h5 className="value-content-block__text-title">
              What Do You Need?
            </h5>
            <p className="value-content-block__text">
              Missing an ingredient? <br /> No problem! EasyCook AI provides a
              full list of what’s required for each recipe. Plan your grocery
              shopping effortlessly.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ValueSection;
