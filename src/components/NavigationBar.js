import React from 'react';
import './css/NavigationBar.css';

function NavigationBar() {
    return (
        <div className="wrapper">
            <head>
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
            </head>
            <nav>
                <ul className="navBar">
                    <li><a class="active" href="home">Home</a></li>
                    <li><a href="about-me">About Me</a></li>
                    <li><a href="work-experience">Work Experience</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul> 
            </nav>

            <section>
                <article>
                    <h4>Section 1</h4>
                </article>
            </section>

            <section>
                <article>
                    <h4>Section 2</h4>
                </article>
            </section>

            <section>
                <article>
                    <h4>Section 3</h4>
                </article>
            </section>

            <section>
                <article>
                    <h4>Section 4</h4>
                </article>
            </section>
        </div>
    )
}

export default NavigationBar;