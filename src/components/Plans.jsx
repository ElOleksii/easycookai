import Container from "./UI/Container";
import Pricing from "./UI/Pricing";
import SectionTitle from "./UI/SectionTitle";

const Plans = () => {
  return (
    <Container>
      <div className="plans">
        <SectionTitle text={"Plans"} />
        <div className="plans-wrapper">
          <Pricing
            type="Enterprise"
            price="$499"
            subscription="year"
            description="Perfect for large-scale businesses."
            buttonText="Choose Enterprise"
          ></Pricing>
        </div>
      </div>
    </Container>
  );
};

export default Plans;
