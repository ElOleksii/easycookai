import Container from "./UI/Container";
import Pricing from "./UI/Pricing";
import SectionTitle from "./UI/SectionTitle";
import { motion } from "framer-motion";
import { sectionVariants } from "../motion";

const Plans = () => {
  return (
    <motion.div
      id="plans"
      className="plans"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <SectionTitle text={"Plans"} />
        <Pricing />
      </Container>
    </motion.div>
  );
};

export default Plans;
