import { useEffect } from "react";
import BgContainer from "../components/BgContainer";
import Container from "../components/Container";
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
import NavBar from "../components/NavBar";
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
      <footer className="text-center text-sm text-white/50 py-2 bg-gray-900">
        <p>
          © 2025 Cyberlane. Developed by{" "}
          <a
            href="https://rithick-11.github.io/portfolio"
            target="_blank"
            className="underline"
          >
            Rithickroshan S
          </a>
          .
        </p>
      </footer>
    </section>
  );
};

export default Home;
