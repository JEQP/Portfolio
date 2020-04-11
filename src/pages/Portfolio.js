import React, { useState, setState } from 'react';
import Header from "../components/Header";
import projects from "../projects.json";
import Project from "../components/Project";
import "./style.css";


function Portfolio() {
    const [projectList, setProjectList] = useState(projects);
    const [featuredProject, setFeaturedProject] = useState({
        "urlSquare": "",
        "urlCard": "",
        "title": "Portfolio",
        "description": "A portfolio showcasing some of the content I have created. Styled with Bootstrap and using Trade Wind font from Google Fonts. An external Javascript file is used to change the showcased content based on the users' clicks.",
        "dLink": "https://jeqp.github.io/portfolio/portfolio.html",
        "rLink": "https://github.com/JEQP/portfolio"
    });



    const featureProject = (propsTitle) => {

        let tempArray = Object.keys(projectList).map(i => projectList[i]);
        tempArray.forEach((item, index) => {
            if (item.title === propsTitle) {
                setFeaturedProject(item);
            }
        })
    };
    // this.featureProject = this.featureProject.bind(this);

    // render() {
    return (
        <div className="container px-xs-0 px-md-0">
            <Header />

            {/* container of content */}
            <div className="container" id="mainblock">

                {/* --content heading -- */}
                <div className="row">
                    <h1 className="px-2">&nbsp;Portfolio&nbsp;</h1>
                </div>

                {/*Three columns of content */}

                <div className="row">
                    {/*left column */}
                    <div className="col-md-4">
                        {
                            projectList.map((item, index) => (
                                (index > 0 && index < 4) &&
                                <Project
                                    key={index}
                                    clickFeature={featureProject}
                                    urlSquare={item.urlSquare}
                                    urlCard={item.urlCard}
                                    title={item.title}
                                    description={item.description}
                                    dLink={item.dLink}
                                    rLink={item.rLink}
                                />
                            ))
                        }

                    </div>

                    {/*centre column, with content hidden and revealed */}
                    <div className="col-md-4">
                        {/* < div className="container" id="showcased"> */}
                        <div id="imageChosen">
                            <img src={featuredProject.urlSquare}
                                className="rounded float-left zoom img-fluid" alt="At first but then"></img>
                        </div>
                        <div id="title">
                            <h2>{featuredProject.title}</h2>
                        </div>
                        <div id="dLink">
                            <a href={featuredProject.dLink} target="_blank">Deployed
                        Link</a>
                        </div>
                        <div id="ghRepo">
                            <a href={featuredProject.rLink} target="_blank">GitHub Repo</a>
                        </div>
                        <div id="description">
                            <p>{featuredProject.description}</p>
                        </div>

                    </div>

                    {/*third column */}
                    <div className="col-md-4">
                        {
                            projectList.map((item, index) => (
                                (index > 3) &&
                                <Project
                                    key={index}
                                    clickFeature={featureProject}
                                    urlSquare={item.urlSquare}
                                    urlCard={item.urlCard}
                                    title={item.title}
                                    description={item.description}
                                    dLink={item.dLink}
                                    rLink={item.rLink}
                                />
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    )
    // }
}

export default Portfolio;