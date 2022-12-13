import '../styles/portfolio.css'
import { TiArrowDownThick } from "react-icons/ti"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { HiDocument } from "react-icons/hi"

function Home(props) {
  return (
    <div>
      <img src="https://i.imgur.com/7auOhtm.jpg" alt="HELOOLL" id="intro-background"></img>
      <div className="Contacts">
      <h1 >{<TiArrowDownThick />} Contact Me {<TiArrowDownThick />}</h1>
      <div id="icons">
      <a href="https://www.linkedin.com/in/swi-triettruong">{<FaLinkedin />}</a>
      <a href="https://github.com/Chrisstruong">{<FaGithub />}</a>
      <a href="https://docs.google.com/document/d/1Oi_YwtveNt5_83QAcfDuzq-cNprtO5hrHK6VwlgJA2c/edit?usp=sharing">{<HiDocument />}</a>
      </div>
      <div className='footer2'>
            <h1>Designed and Developed by Triet Truong - {<FaCopyright />}2022</h1>
        </div>
    </div>

    </div>
  );
}

export default Home;