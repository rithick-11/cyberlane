import BgContainer from "../components/BgContainer";
import Container from "../components/Container";
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <section>
      <BgContainer />
      <NavBar />
      <Container>
        <HeroSection />
        <EventSection />
      </Container>
    </section>
  );
};

export default Home;
