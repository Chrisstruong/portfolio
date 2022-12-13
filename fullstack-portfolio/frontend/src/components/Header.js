import { Link } from "react-router-dom";
import '../styles/portfolio.css'

function Header(props) {
  //inline style for the nav tag
 

  return (
    <header>
      <nav className="navStyle">
        <Link to="/">
          <div className="el">HOME</div>
        </Link>
        <Link to="/about">
          <div className="el">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="el">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;