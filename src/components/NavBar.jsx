import { Link } from "react-router-dom";
import Container from "./Container";

const NavBar = () => {
  return (
    <nav className="bg-black/50 sticky top-0">
      <Container>
        <div className="py-3 ">
          <Link to="/" className="text-2xl md:text-3xl text-white/90 tiitle-font">Cyberalone</Link>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
