import React from "react";
import "./style.css";

function Project(props) {
    return (
            <div className="container thumb">
                <img src={props.urlCard} alt={props.title} className="rounded float-left zoom img-fluid toClick" onClick={() => props.clickFeature(props.title)}></img>
            </div>


    )
}

export default Project;