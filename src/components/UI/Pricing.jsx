import { motion } from "framer-motion";

const Pricing = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="pricing-cards">
      <motion.div variants={cardVariants}>
        <PricingCard type="Standard" price="Free" buttonText="Choose Free">
          <List>Query limit</List>
          <List>3 dishes per week</List>
        </PricingCard>
      </motion.div>
      <motion.div variants={cardVariants}>
        <PricingCard
          type="Student"
          price="2.5$"
          subscription="per month"
          buttonText="Choose Student"
          active
        >
          <List>No limits</List>
          <List>New feature Your fridge</List>
        </PricingCard>
      </motion.div>
      <motion.div variants={cardVariants}>
        <PricingCard
          type="Professional"
          price="5$"
          subscription="per month"
          buttonText="Choose Individual"
        >
          <List>No limits</List>
          <List>New feature Your fridge</List>
        </PricingCard>
      </motion.div>
      <motion.div variants={cardVariants}>
        <PricingCard
          type="Family"
          price="9$"
          subscription="per month"
          description="Connect up to 4 accounts*"
          buttonText="Choose Family"
        >
          <List>No limits</List>
          <List>New feature Your fridge</List>
        </PricingCard>
      </motion.div>
    </div>
  );
};

const PricingCard = ({
  children,
  price,
  type,
  subscription,
  description,
  buttonText,
  active,
}) => {
  return (
    <div className={"pricing-card"}>
      <h3 className="card-title">{type}</h3>
      <h2 className="card-price">
        {price} <br />
        {subscription && <span> {subscription}</span>}
      </h2>
      <h4 className="card-description">
        {description && <span>{description} </span>}
      </h4>
      <div className="card-list">{children}</div>
      <button className={`card-button ${active ? "active" : ""}`}>
        {buttonText}
      </button>
    </div>
  );
};

const List = ({ children }) => {
  return <p className="card-list-item">{children}</p>;
};

export default Pricing;
