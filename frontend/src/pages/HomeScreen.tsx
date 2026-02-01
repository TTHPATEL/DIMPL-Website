import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Statistics } from "../components/Statistics";
import { Projects } from "../components/Projects";
import { LocationMap } from "../components/LocationMap";
import { Fleet } from "../components/Fleet";
import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";
import { FleetSlide } from "../components/FleetSlide";
const HomeScreen = () => {
  return (
    <div className="bg-white">
      <main>
        <Hero />
        <Services />
        <FleetSlide />
        <Statistics />
        <Projects />
        <LocationMap />
        <Fleet />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
