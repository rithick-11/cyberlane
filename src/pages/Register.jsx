import BgContainer from "../components/BgContainer";
import Container from "../components/Container";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div>
      <BgContainer />
      <Container>
        <NavBar />
        <div className="pt-[10vh] pb-7 min-h-screen text-white/60">
          <h1 className="text-3xl font-semibold text-orange-400">
            Registration
          </h1>
          <div className="flex flex-col justify-center gap-4 items-center h-full text-center">
            <p className="text-2xl text-red-400">Online Registration Closed</p>
            <p className="inline-flex font-semibold text-4xl animate-text-gradient bg-gradient-to-r from-orange-400 to-amber-300 bg-[200%_auto] bg-clip-text text-transparent">
              Spot Registration Available!
            </p>
            <CountdownTimer />
            <p className="text-white">
              Spot Registration Fee: ₹200 per Participant
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.13100879406!2d77.99882702219472!3d11.477491634526436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe0bee4ef722b%3A0xa949856b58bb6c9e!2sMahendra%20Engineering%20College!5e0!3m2!1sen!2sin!4v1739944030449!5m2!1sen!2sin"
              width="600"
              height="450"
              className="w-full h-[50vh] sm:w-[60vw] md:w-[50vw]"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <Link to="/" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-400 backdrop-blur-3xl">
                <FaArrowLeft className="mr-2" />
                Cyber.l@ne
              </span>
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
