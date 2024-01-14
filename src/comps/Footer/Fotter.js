// Footer.js

import "./Fotter.css";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_main">
                <a href="https://github.com/Kaival1212" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://linkedin.com/in/kaival-patel-6a3614252" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a href="https://www.instagram.com/kaival3074/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </div>
        </div>
    );
}
