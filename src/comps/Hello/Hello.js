// import Header from "../Header/header";
import "./Hello.css";
import Header from "../Header/header";
import {TypeAnimation} from "react-type-animation";


export default function Hello() {
    return (
        <div className="Hello">
            <Header></Header>
            <div className="Hello_main">
                <div className="Hello_main_left">
                    <div className="Hello_main_left_numbers">
                        {Array(20).fill(1).map((_, i) => {
                            return <div key={i + 1} className={`Hello_main_left_numbers_${i}`}>{i + 1}</div>
                        })}
                    </div>
                    <div className="Hello_main_left_lines">
                        {Array(3).fill(1).map((_, i) => {
                            return <div key={i}></div>
                        })}
                    </div>
                    <div className="Hello_main_left_text">
                        <span className="tag">{"<hello>"}</span> <br/>
                        <span className="attribute">{"  Hello, My name is Kaival(){"}</span><br/>
                        <span className="keyword">{"    I am a full-Stack Developer"}</span>
                        <span className="keyword">{"    I have experience in building projects"}</span>
                        <span
                            className="keyword">{"    using React.js, Node.js, MongoDB, Tensorflow, and more"}</span><br/>
                        <span className="attribute">{"  }"}</span> <br/>
                        <span className="tag">{"</hello>"}</span>
                    </div>
                </div>

                <div className="Hello_main_right">
                    <div className="Hello_main_right_text">
                        {"<KAIVAL"}<br/>
                        {"PATEL/>"}
                    </div>
                    <div className="Hello_main_right_subtext">
                        {"//"} <span>I CAN HELP YOU WITH</span>

                    </div>
                    <div className="Hello_main_right_typing">
                        <TypeAnimation
                            sequence={[
                                'Full-Stack',
                                1000,
                                'iOS Development',
                                1000,
                                'Tensorflow Models',
                                1000,
                                'Machine Learning',
                                1000,
                                'ReactJS',
                                1000,
                                'Problem Solving',
                                1000,
                                'Communication',
                                1000,
                            ]}
                            speed={10}
                            style={{fontSize: '2em'}}
                            repeat={Infinity}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}