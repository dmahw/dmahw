import React from 'react';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import HobbiesInterests from './HobbiesInterests';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';

class PrimaryContent extends React.Component {
  renderHome() {
    return (
      <Home />
    )
  }

  renderAboutMe() {
    return (
      <AboutMe />
    )
  }

  renderEducation() {
    return (
      <Education />
    )
  }

  renderHobbiesInterests() {
    return (
      <HobbiesInterests />
    )
  }

  renderWorkExperience() {
    return (
      <WorkExperience />
    )
  }

  renderProjects() {
    return (
      <Projects />
    )
  }

  renderContact() {
    return (
      <Contact />
    )
  }

  render () {
    switch (this.props.primaryNavigationBarSelection) {
      case 'home':
        return (
          this.renderHome()
        )
      case 'about-me':
        return (
          this.renderAboutMe()
        )
      case 'education':
        return (
          this.renderEducation()
        )
      case 'hobbies-interests':
        return (
          this.renderHobbiesInterests()
        )
      case 'work-experience':
        return (
          this.renderWorkExperience()
        )
      case 'projects':
        return (
          this.renderProjects()
        )
      case 'contact':
        return (
          this.renderContact()
        )
      default:
        return (
          this.renderHome()
        )
    }
  }
}

export default PrimaryContent;