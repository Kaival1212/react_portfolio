import React from 'react';
import Header from "../Header/header";
import './About.css';
import {MdError} from "react-icons/md";
import About_image from "./About.JPG";

export default function About() {
    const numbers = [];
    for (let i = 41; i < 59; i++) {
        numbers.push(<div key={i} className="About_number">{i}</div>);
    }

    return (
        <div className="About">
            <Header pageno={2}/>
            <div className="About_main">

                <div className="About_main_numbers">
                    {numbers.map((number) => (
                        <div>
                            {number}
                        </div>
                    ))}
                </div>
                <div className="About_main_text">

                    <div className="About_main_text_first_line">
                        <MdError/>
                        {"<aboutme>"}
                    </div>
                    <p className="About_main_text_main">
                        As a highly <span className="tag">skilled and motivated</span> individual developer<br/>
                        I am passionate about creating and developing web applications<br/>
                        that are <span className="attribute">user friendly and efficient</span>. I am a fast learner
                        and<br/>
                        I am always looking for new challenges and opportunities to learn<br/><br/>

                        <span className="keyword">I am confident in my ability to bring value</span> to any
                        project<br/>
                        and I am always <span
                        className="tag">looking to improve my skills and knowledge</span><br/>
                        to become a better developer. I am a team player and I<br/>
                        approach every task with <span className="variable">dedication and enthusiasm.</span>
                        <br/><br/>

                        <span className="attribute">In summary,</span> I am a highly <span className="variable"> motivated and skilled
                        developer </span><br/>
                        with a passion for creating and developing web applications<br/>
                        that are user <span className="attribute">friendly and efficient.</span><br/>
                    </p>
                    <div className="About_main_text_last_line"><MdError/>
                        {"</aboutme>"}</div>
                </div>
                <div className="About_main_image">
                    <img src={About_image} alt={"loading"}></img>
                </div>
            </div>
        </div>
    );
}
