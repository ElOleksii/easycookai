import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ValueSection from "./components/ValueSection";
import HowToCookSection from "./components/HowToCookSection";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ValueSection />
      <HowToCookSection />
      <Plans />
    </>
  );
}

export default App;
