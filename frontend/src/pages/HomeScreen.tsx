import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Statistics } from "../components/Statistics";
import { Projects } from "../components/Projects";
import { LocationMap } from "../components/LocationMap";
import { Fleet } from "../components/Fleet";
import { Clients } from "../components/Clients";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <Hero />
        <Services />
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
