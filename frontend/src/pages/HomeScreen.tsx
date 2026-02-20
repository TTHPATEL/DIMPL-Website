import { Hero } from "../components/Hero";
import { LocationMap } from "../components/LocationMap";
import { Clients } from "../components/Clients";
import { FleetSlide } from "../components/FleetSlide";
import { PerformanceStatsPremium } from "../components/PerformanceStatsPremium";
import { AboutUs } from "../components/AboutUs";  
import "../index.css";
const HomeScreen = () => {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <AboutUs />
        <PerformanceStatsPremium />
        <LocationMap />
        <FleetSlide />
        <Clients />
      </main>
    </div>
  );
};

export default HomeScreen;
