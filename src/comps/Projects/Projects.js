// import Header from "../Header/header";

import Header from "../Header/header";
import "./Projects.css";
import {FaRegStar} from "react-icons/fa";
import profile_pic from "../About/About.JPG";
import {IoPeople} from "react-icons/io5";


function Repos({name, lang, url}) {
    return (
        <div className="Projects_main_right_repositorie">
            <div className="Projects_main_right_repositorie_title">

                <div className="Projects_main_right_repositorie_title_name">
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                </div>
                <div className={"Projects_main_right_repositorie_coding_lang"}>
                    <div className={"Projects_main_right_repositorie_coding_lang_circle"}>

                    </div>
                    {lang}
                </div>
            </div>

            <div className="Projects_main_right_repositorie_star">
                <button className="Projects_main_right_repositorie_star_button">
                    <FaRegStar/>
                    Star
                </button>
            </div>

        </div>
    );
}

export default function Projects() {
    return (
        <div className="Projects_main">
            <Header pageno={4}/>
            <div className="Projects_main_title">
                <div className="Projects_main_left">

                    <img src={profile_pic} alt={"profile pic"} className={"Projects_main_left_image"}></img>
                    <div className={"Projects_main_left_title"}>
                        Kaival
                        <div className={"Projects_main_left_subtitle"}>
                            Kaival1212
                        </div>
                    </div>
                    <button className={"Projects_main_left_button"}>Edit Profile</button>

                    <div className={"Projects_main_left_bio"}>

                        <div className={"Projects_main_left_followers"}>
                            <IoPeople/>
                            <div className={"Projects_main_left_followers_number"}>
                                0
                            </div>
                            <div className={"Projects_main_left_followers_text"}>
                                Followers
                            </div>
                        </div>

                        <div className={"Projects_main_left_following"}>
                            <div className={"Projects_main_left_following_number"}>
                                0
                            </div>
                            <div className={"Projects_main_left_following_text"}>
                                Following
                            </div>
                        </div>
                    </div>

                </div>

                <div className="Projects_main_right">
                    {/*<div className="Projects_main_right_indi">*/}
                    <Repos name="FitnessGPT" lang="React.js" url="https://fitness-gptt.web.app/"/>
                    <Repos name="FitnessX-APP" lang="Swift" url="https://github.com/Kaival1212/FitnessX-APP"/>
                    <Repos name="MS-app" lang="Swift" url="https://github.com/Kaival1212/MS-app"/>
                    <Repos name="Astral-Chart" lang="React.js" url="https://astral-chart.web.app/"/>
                    <Repos name="bet365-ai" lang="Python" url="https://github.com/Kaival1212/bet365-ai"/>
                    <Repos name="Binary-Decode" lang="Python" url="https://github.com/Kaival1212/Binary-Decode"/>

                    {/*</div>*/}

                </div>

            </div>
        </div>
    );
}