import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style.css";
import Background from "../images/background.jpg";

var sectionStyle = {
    backgroundImage: `url(${Background})`
  };


function About() {

    return (
        <div style={sectionStyle}>
            <Header />
            <div class="contactForm">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgI9FTPD10u1Z0uClmk50u_zGSf4p2Xg7lB1NhCc3NEX3mNA/viewform?embedded=true" width="640" height="865" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <Footer />
        </div>
    )

}

export default About;