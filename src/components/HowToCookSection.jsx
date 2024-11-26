import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";

const HowToCookSection = () => {
  return (
    <section className="howtocook-section">
      <Container>
        <SectionTitle text={"How to cook?"} />
        <div className="howtocook-content">
          <div className="howtocook-content-block">
            <h5 className="howtocook-block-title">Clear Instructions</h5>
            <p className="howtocook-block-text">
              Detailed step-by-step guidance for any dish
            </p>
          </div>
          <div className="howtocook-content-block">
            <h5 className="howtocook-block-title">
              Voice-Activated Assistance
            </h5>
            <p className="howtocook-block-text">
              No need for messy hands on your device EasyCook AI reads out every
              step and waits for your voice confirmation before proceeding
            </p>
          </div>
          <div className="howtocook-content-block">
            <h5 className="howtocook-block-title">Automatic Timers</h5>
            <p className="howtocook-block-text">
              Set and managed automatically for precision cooking.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowToCookSection;
