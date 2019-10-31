import React from 'react';
import './css/AboutMe.css';
import './css/AboutMeSmall.css';
import profilePhoto2 from './../images/profilePhoto2.PNG'
import MediaQuery from 'react-responsive'

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <MediaQuery minWidth={800}>
          <div className="about-me-background">
            <div className="about-me-container">
              <div className="about-me-row">
                <div className="about-me-1">
                  <h1 ref={this.props.reference} className="about-me-header">About Me</h1>
                  <p className="about-me-text">
                    Driven and open minded, I am software developer from Victoria, BC, Canada, who is passionate in building innovative solutions using my creative, communication, and procedural skills. I continuously strive to learn new technologies and push the boundary in hopes to make a positive change in people’s lives from my efforts.
                  </p>
                </div>
                <div className="about-me-2">
                  <img className="about-me-photo" src={profilePhoto2} alt="Profile Photo 2"></img>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <div className="about-me-container-small">
            <h1 ref={this.props.reference} className="about-me-header-small">About Me</h1>
            <div className="about-me-photo-container-small">
              <img className="about-me-photo-small" src={profilePhoto2} alt="Profile Photo 2"></img>
            </div>
            <p className="about-me-text-small">
              Driven and open minded, I am software developer from Victoria, BC, Canada, who is passionate in building innovative solutions using my creative, communication, and procedural skills. I continuously strive to learn new technologies and push the boundary in hopes to make a positive change in people’s lives from my efforts.
            </p>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default AboutMe;