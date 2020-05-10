import React from "react";
import Header from "../components/Header";
import "./style.css";
import Background from "../images/background.jpg";
import Profile1 from "../images/Profile1.jpg";
import Footer from "../components/Footer";

var sectionStyle = {
    backgroundImage: `url(${Background})`
};

function About() {

    return (
        <div class="aboutDiv" style={sectionStyle}>
            <div className="container px-xs-0 px-md-0" >
                <Header />
                <div className="container px-xs-0 px-md-2" id="mainblock">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="px-2">About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">

                            <img className="img-fluid" src={Profile1} alt="Handsome, Bearded Man"></img>

                        </div>

                        <div className="col-sm-8 bioBlock">
                            <p>
                                Full-stack MERN developer with a background in journalism keen to create accessible content.
                                Recently earned a certificate in Full Stack Development from The Coding Bootcamp at the
                                University of Sydney, covering Javascript, jQuery, Bootstrap, AJAX, Node.js, Mongo and React.
                                Known for an obsessive attention to detail and creative problem solving, with a strong interest
                                in crafting the best UX. Created an interplayer-puzzle game allowing user-generated content, and attempting puzzles created by other players.
                                Collaborated via Slack and Github with a team of three to generate a
                                web service allowing users to discover and create cocktails, each working independently.
                                My aim is to create frictionless experiences for the user so they can actively engage with
                                services that benefit them. Excited to join a creative team to solve problems before people
                                realise they have them.
                            </p>

                            <p>
                                Living in Mexico, I took time off work to raise my three children to be the intelligent,
                                compassionate, friendly and motivated people they show every sign of becoming. At the same
                                time I started a bio-ethical student housing project with my wife.
                            </p>
                            <p><br></br>
                            Returning to Australia, my attention turned to an area where words have the most direct and
                            predictable effect on the the world illuminated: Web development. I aim to use my coding
                            skills to share knowledge and services in a simple, appealing and engaging manner. When not coding I enjoy helping the local Scout Group, soccer, creative writing, gardening, and gaming.
                        </p>


                        </div>
                    </div>

                </div>

            </div>
            <div className="spacer"></div>
            <Footer />
        </div>
    )
}

export default About;