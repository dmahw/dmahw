import React from 'react';
import './css/NavigationBar.css';

function NavigationBar() {
    return (
        <ul className="navBar">
            <li><a class="active" href="home">Home</a></li>
            <li><a href="about-me">About Me</a></li>
            <li><a href="work-experience">Work Experience</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="contact">Contact</a></li>
        </ul> 
    )
}

export default NavigationBar;