import React from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import WorkExperience from './WorkExperience';
import HobbiesInterests from './HobbiesInterests';
// import Projects from './Projects';
import Contact from './Contact';

class PrimaryContent extends React.Component {
  render () {
    return (
      <div>
        <Home 
          reference={this.props.references.refHome}
        />
        <AboutMe
          reference={this.props.references.refAboutMe}
        />
        <Education
          reference={this.props.references.refEducation}
        />
        <WorkExperience
          reference={this.props.references.refWorkExperience}
        />
        <HobbiesInterests 
          reference={this.props.references.refHobbiesInterests}
        />
        {/* <Projects /> */}
        <Contact
          reference={this.props.references.refContact}
        />
      </div>
    ) 
  }
}

export default PrimaryContent;