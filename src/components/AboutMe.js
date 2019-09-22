import React from 'react';
import './css/AboutMe.css';

class AboutMe extends React.Component {
  render () {
    return (
      <div className="about-me-background">
        <div className="about-me-container">
          
          <h1 className="about-me-header">About Me</h1>
          <div className="about-me-row">
            <div className="about-me-col">
              <p className="about-me-1">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
            <div className="about-me-col">
              <p className="about-me-2">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
          </div>
          
        </div>
      </div> 
    )
  }
}

export default AboutMe;