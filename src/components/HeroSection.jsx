import CollegeCard from "./CollegeCard";

const HeroSection = () => {
  return (
    <div className="h-[95vh] flex flex-col justify-center text-white gap-14">
      <CollegeCard />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl sm:4xl md:5xl font-normal">
          Department of <span className="text-orange-400">Cyber Security</span>
        </h1>
        <p>Present's</p>
        <span className="inline-flex text-5xl sm:text-6xl mdtext-7xl animate-text-gradient bg-gradient-to-r from-orange-500 to-orange-200 bg-[200%_auto] bg-clip-text text-transparent">
          Cyber.l@ne
        </span>
        <a
          href="https://docs.google.com/forms/d/1CXbdCbWANm3TK0Kz7j2JLez7mJwdBD1FCaExqy8fosI/edit?pli=1"
          className="block mt-4"
          target="_blank"
        >
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
              Register Now
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
