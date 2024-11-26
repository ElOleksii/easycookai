import DowlnoadButton from "./UI/DowloadButton";
import appleStore from "../assets/apple-store.svg";
import playStore from "../assets/playstore.svg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">EasyCookAI</h1>
        <p className="hero-title-subtext">
          Your personal AI culinary assistant
        </p>
        <div className="dowload-btn-wrapper">
          <DowlnoadButton icon={appleStore} text={"Download on Google Play"} />
          <DowlnoadButton icon={playStore} text={"Download on App Store"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
