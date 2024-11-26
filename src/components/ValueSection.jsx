import SectionTitle from "./UI/SectionTitle";
import girlCooling from "../assets/girl-cooking.png";

const ValueSection = () => {
  return (
    <section className="value-section">
      <div className="value-content-top">
        <SectionTitle text={"Cook Smarter Not Harder"} />
        <p className="value-subtitle">
          EasyCook AI is your innovative kitchen helper, designed to simplify
          cooking and enhance your culinary experience. With personalized
          recipes tailored to the ingredients you already have, and a hands-free
          voice assistant to guide you step-by-step, cooking has never been
          easier.
        </p>
      </div>
      <div className="value-content-block">
        <div className="value-content-block__left">
          <img className="w-full h-auto" src={girlCooling} alt="girl_cooking" />
        </div>
        <div className="value-content-block__right">
          <div className="value-content-block-text">
            <h5 className="value-content-block__text-title">
              What is in Your Fridge?
            </h5>
            <p className="value-content-block__text">
              Don’t stress over what to cook! <br /> Simply let EasyCook AI know
              what ingredients are available. It will scan your fridge and
              pantry to suggest delicious meals you can make right away.
            </p>
          </div>
          <div className="value-content-block-text">
            <h5 className="value-content-block__text-title">
              What Do You Need?
            </h5>
            <p className="value-content-block__text">
              Missing an ingredient? <br /> No problem! EasyCook AI provides a
              full list of what’s required for each recipe. Plan your grocery
              shopping effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
