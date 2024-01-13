import {useState} from "react";
import "./Header.css";

export default function Header(props) {
    const [activeLine, setActiveLine] = useState(props.pageno || 1);
    const handleLinkClick = (lineNumber) => {
        setActiveLine(lineNumber);
    };
    return(
        <div className="Header">
            <header className="mainHeader">
                <div className="mainHeader_closeBtn"></div>
                <div className="mainHeader_minBtn"></div>
                <div className="mainHeader_maxBtn"></div>
                Kaival_patel
            </header>
            <nav className="mainNav">
                <ul className="mainNav_ul">
                    <li>
                        <div className={`line1 ${activeLine === 1 ? 'active' : ''}`}></div>
                        <a href="/" className="mainNav_ul_hello" onClick={() => handleLinkClick(1)}>
                            $hello
                        </a>
                    </li>
                    <li>
                        <div className={`line2 ${activeLine === 2 ? 'active' : ''}`}></div>
                        <a href="/about" className="mainNav_ul_about" onClick={() => handleLinkClick(2)}>
                            $about me
                        </a>
                    </li>
                    <li>
                        <div className={`line3 ${activeLine === 3 ? 'active' : ''}`}></div>
                        <a href="/skills" className="mainNav_ul_skills" onClick={() => handleLinkClick(3)}>
                            $skills
                        </a>
                    </li>
                    <li>
                        <div className={`line4 ${activeLine === 4 ? 'active' : ''}`}></div>
                        <a href="/projects" className="mainNav_ul_projects" onClick={() => handleLinkClick(4)}>
                            $projects
                        </a>
                    </li>
                    <li>
                        <div className={`line5 ${activeLine === 5 ? 'active' : ''}`}></div>
                        <a href="/contacts" className="mainNav_ul_contacts" onClick={() => handleLinkClick(5)}>
                            $contacts
                        </a>
                    </li>
                    <div></div>
                </ul>
            </nav>
        </div>
    );
}