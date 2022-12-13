import { TiArrowDownThick } from "react-icons/ti"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocument } from "react-icons/hi" 
import "../styles/portfolio.css"
function Footer(props) {
  return (
    <div>
      <h1 >{<TiArrowDownThick />} Contact Me {<TiArrowDownThick />}</h1>
      <div>
      <a href="https://github.com/Chrisstruong">{<FaGithub />}</a>
      <a href="https://www.linkedin.com/in/swi-triettruong">{<FaLinkedin />}</a>
      <a href="https://docs.google.com/document/d/1Oi_YwtveNt5_83QAcfDuzq-cNprtO5hrHK6VwlgJA2c/edit?usp=sharing">{<HiDocument />}</a>
      </div>
    </div>
    
  )
}

export default Footer;