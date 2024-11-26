const Pricing = () => {
  return (
    <div className="pricing-cards">
      <PricingCard type="Standard" price="Free" buttonText="Choose Free">
        <List>Query limit</List>
        <List>3 dishes per week</List>
      </PricingCard>
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
      <PricingCard
        type="Professional"
        price="5$"
        subscription="per month"
        buttonText="Choose Individual"
      >
        <List>No limits</List>
        <List>New feature Your fridge</List>
      </PricingCard>
      <PricingCard
        type="Family"
        price="9$"
        subscription="per month"
        buttonText="Choose Family"
      >
        <List>No limits</List>
        <List>New feature Your fridge</List>
      </PricingCard>
    </div>
  );
};

const PricingCard = ({
  children,
  price,
  type,
  subscription,
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
