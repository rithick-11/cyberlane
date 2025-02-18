import BgContainer from "../components/BgContainer";
import CollegeCard from "../components/CollegeCard";
import Container from "../components/Container";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <section>
      <BgContainer />
      <NavBar />
      <Container>
        <div className="h-screen flex flex-col justify-center text-white gap-14">
          <CollegeCard />
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl sm:4xl md:5xl font-normal">
              Department of{" "}
              <span className="text-orange-400">Cyber Security</span>
            </h1>
            <p>Presents's</p>
            <span className="inline-flex text 5xl sm:text-6xl mdtext-7xl animate-text-gradient bg-gradient-to-r from-orange-500 to-orange-200 bg-[200%_auto] bg-clip-text text-xl text-transparent">
              Cyber.@lone
            </span>
            <a href="#" className="block mt-4">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                  Register Now
                </span>
              </button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
