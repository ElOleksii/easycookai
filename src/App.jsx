import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ValueSection from "./components/ValueSection";
import HowToCookSection from "./components/HowToCookSection";
import Plans from "./components/Plans";
import TryItSection from "./components/TryItSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ValueSection />
      <HowToCookSection />
      <Plans />
      <TryItSection />
      <Footer />
    </>
  );
}

export default App;
