// import Header from "../Header/header";
import "./Hello.css";
import Header from "../Header/header";
import {TypeAnimation} from "react-type-animation";


export default function Hello() {
    return (
        <div className="Hello">
            <Header pageno={1}/>
            <div className="Hello_body">
                <div className="Hello_body_left">
                    <div className="Hello_body_left_numbers">
                        {Array(20).fill(0).map((_, i) => {
                            return <div className="Hello_body_left_numbers_number">{i + 1}</div>
                        })}
                    </div>
                    <div className="Hello_body_left_lines">
                        {Array(3).fill(0).map((_, i) => {
                            return <div className={`Hello_body_left_lines_line${i}`}></div>
                        })}
                    </div>
                    <div className="Hello_body_left_text">
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
                <div className="Hello_body_right">
                    <div className="Hello_body_right_text">
                        {"<KAIVAL"}<br/>
                        {"PATEL/>"}
                    </div>
                    <div className="Hello_body_right_subtext">
                        <div>
                            // <span>I HELP YOU TO</span>
                        </div>
                    </div>
                    <div className="Hello_body_right_type">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'TEMP T 1',
                                1000,
                                'TEMP TE 2',
                                1000,
                                'TEMP TEX 3',
                                1000,
                                'TEMP TEXT 4',
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