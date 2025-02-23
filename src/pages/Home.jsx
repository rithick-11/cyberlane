import { useEffect } from "react";
import BgContainer from "../components/BgContainer";
import Container from "../components/Container";
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const isDev = import.meta.env.VITE_MODE == "DEV";

const Home = () => {
  useEffect(() => {
    if (!isDev) {
      fetch(
        "https://portfolio-server-pink-seven.vercel.app/api/cyberlane/vistcount"
      );
    }
  }, []);

  return (
    <section>
      <BgContainer />
      <NavBar />
      <Container>
        <HeroSection />
        <EventSection />
        <LocationSection />
      </Container>
      <Footer />
    </section>
  );
};

export default Home;
