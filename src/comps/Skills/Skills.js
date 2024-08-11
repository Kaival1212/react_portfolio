// import Header from "../Header/header";
import Header from "../Header/header";
import "./Skills.css";
import { FaCaretDown, FaFile, FaFileCode } from "react-icons/fa";

export default function Skills() {

    const ProgessBar = ({ Number }) => {

        return (
            <div className="Skills_main_right_progress">
                {/* eslint-disable-next-line array-callback-return */}
                {Array(12).fill(1).map((_, i) => {
                    return (<div className={`Skills_main_right_progress ${Number >= i ? "active_skills" : " "}`}>

                    </div>)
                })}
            </div>
        )

    }

    return (
        <div className="Skills">
            <Header pageno={3} />
            <div className="Skills_main">
                <div className="Skills_main_left">

                    <div className="Skills_main_left_title">
                        <FaCaretDown />
                        <FaFile />
                        Hard_skills
                    </div>

                    <div className="Skills_main_left_content">
                        <div><FaFileCode></FaFileCode> Laravel</div>
                        <div><FaFileCode></FaFileCode> React</div>
                        <div><FaFileCode></FaFileCode> CSS</div>
                        <div><FaFileCode></FaFileCode> JavaScript</div>
                        <div><FaFileCode></FaFileCode> Node.js</div>
                        <div><FaFileCode></FaFileCode> Express</div>
                        <div><FaFileCode></FaFileCode> MongoDB</div>
                        <div><FaFileCode></FaFileCode> MySQL</div>
                        <div><FaFileCode></FaFileCode> Python</div>
                        <div><FaFileCode></FaFileCode> Java</div>
                        <div><FaFileCode></FaFileCode> Tensorflow</div>
                        <div> ....</div>

                    </div>
                </div>
                <div className="Skills_main_right">
                    <div className="Skills_main_right_list">
                    <div className="Skills_main_right_list_title">
                            Laravel
                            <ProgessBar Number={8} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            React
                            <ProgessBar Number={11} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            CSS
                            <ProgessBar Number={9} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            JavaScript
                            <ProgessBar Number={10} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Node.js
                            <ProgessBar Number={11} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Express
                            <ProgessBar Number={11} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            MongoDB
                            <ProgessBar Number={8} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            MySQL
                            <ProgessBar Number={8} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Python
                            <ProgessBar Number={11} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Java
                            <ProgessBar Number={7} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Tensorflow
                            <ProgessBar Number={9} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Computer Vision
                            <ProgessBar Number={8} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            IOS development
                            <ProgessBar Number={7} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Communication
                            <ProgessBar Number={9} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Teamwork
                            <ProgessBar Number={8} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Leadership
                            <ProgessBar Number={9} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Problem solving
                            <ProgessBar Number={11} />
                        </div>
                        <div className="Skills_main_right_list_title">
                            Time management
                            <ProgessBar Number={6} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}