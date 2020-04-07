import React from "react";
import Profile1 from '../images/Profile1.jpg';
// import Header from "../components/Header";

function About() {

    return (
        <div class="container px-xs-0 px-md-0">
            {/* <Header /> */}
            <div class="container px-xs-0 px-md-2" id="mainblock">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="px-2">About Me</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">

                        <img class="img-fluid" src={Profile1} alt="Handsome, Bearded Man"></img>

                    </div>

                    <div class="col-sm-8 bioBlock">


                        <p>
                            Long have I been impressed at the ability of words to illuminate realities in the minds of
                            those who hear them. It was this which inspired me to earn a Masters of Journalism after I graduated
                            my Bachelor of Biotechnology. Eager to share the lessons of science in a narrative
                            comprehensible to the general public, I spent several years in my career as a technology journalist.
                        </p>
                        <p>
                            Living in Mexico, I took time off work to raise my three children to be the intelligent,
                            compassionate, friendly and motivated people they show every sign of becoming. At the same
                            time I started a bio-ethical student housing project with my wife.
                        </p>
                        <p><br></br>
                            Returning to Australia, my attention turned to an area where words have the most direct and
                            predictable effect on the the world illuminated: Web development. I aim to use my coding
                            skills to share knowledge and services in a simple, appealing and engaging manner.
                        </p>


                    </div>
                </div>

            </div>


        </div>
    )
}

export default About;