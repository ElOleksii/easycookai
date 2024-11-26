import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";
import { motion } from "framer-motion";
import { sectionVariants } from "../motion";
const HowToCookSection = () => {
  const blockVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="howtocook-section"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <motion.div variants={blockVariants}>
          <SectionTitle text={"How to cook?"} />
        </motion.div>
        <div className="howtocook-content">
          <motion.div
            className="howtocook-content-block"
            variants={blockVariants}
          >
            <h5 className="howtocook-block-title">Clear Instructions</h5>
            <p className="howtocook-block-text">
              Detailed step-by-step guidance for any dish
            </p>
          </motion.div>
          <motion.div
            className="howtocook-content-block"
            variants={blockVariants}
          >
            <h5 className="howtocook-block-title">
              Voice-Activated Assistance
            </h5>
            <p className="howtocook-block-text">
              No need for messy hands on your device EasyCook AI reads out every
              step and waits for your voice confirmation before proceeding
            </p>
          </motion.div>
          <motion.div
            className="howtocook-content-block"
            variants={blockVariants}
          >
            <h5 className="howtocook-block-title">Automatic Timers</h5>
            <p className="howtocook-block-text">
              Set and managed automatically for precision cooking.
            </p>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default HowToCookSection;
