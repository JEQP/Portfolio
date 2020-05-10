import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./style.css";


class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <div className="container  px-md-0 px-xs-0">

                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/about">
                        <h1 id="name-cover">&nbsp;James Q. Pearce&nbsp;</h1>
                    </a>

                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                        <div className="navbar-nav ml-auto">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/portfolio" alt="Portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="https://www.linkedin.com/in/james-quintana-pearce/" alt="link to LinkedIn profile">LinkedIn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="https://docs.google.com/document/d/1otbC0ndndTepoBLxiAFdl7b3SY5uEoImKWtZbEN6aOk/edit?usp=sharing" alt="link to resume">Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;

    // React hamburger adapted from here: https://www.bennettnotes.com/bootstrap-navbar-collapse-reactjs/