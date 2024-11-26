import { motion } from "framer-motion";
import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";
import DownloadButton from "./UI/DownloadButton";
import appleStore from "../assets/apple-store.svg";
import playStore from "../assets/playstore.svg";
import robotIcon from "../assets/robot.svg";
import { sectionVariants } from "../motion";

const TryItSection = () => {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="try-it-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <SectionTitle text="Try it now" />
        <motion.div className="try-it__wrapper-btn" variants={buttonVariants}>
          <motion.div variants={buttonVariants}>
            <DownloadButton
              icon={appleStore}
              text={"Download on Google Play"}
            />
          </motion.div>
          <img className="robot-icon" src={robotIcon} alt="robot" />
          <motion.div variants={buttonVariants}>
            <DownloadButton icon={playStore} text={"Download on App Store"} />
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default TryItSection;
