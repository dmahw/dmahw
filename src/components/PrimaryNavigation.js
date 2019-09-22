import React from 'react';
import './css/PrimaryNavigation.css';

class PrimaryNavigationButton extends React.Component {
  render() {
    return (
      <button
        className={
          this.props.isActive ? "primary-navigation-button-active" : "primary-navigation-button"
        }
        onClick={() => this.props.onClick(this.props.id)}
      >
        {this.props.name}
      </button>
    )
  }
}

class PrimaryNavigationBar extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="primary-nav-bar">
          <PrimaryNavigationButton
            isActive = {this.props.primaryNavigationBarSelection === 'home'}
            id = "home"
            name = "Home"
            onClick = {this.props.handlePrimaryNavigationBarClick}
          />
          <PrimaryNavigationButton
            isActive = {this.props.primaryNavigationBarSelection === 'about-me'}
            id = "about-me"
            name = "About Me"
            onClick = {this.props.handlePrimaryNavigationBarClick}
          />
          <PrimaryNavigationButton
            isActive = {this.props.primaryNavigationBarSelection === 'education'}
            id = "education"
            name = "Education"
            onClick = {this.props.handlePrimaryNavigationBarClick}
          />
          <PrimaryNavigationButton
            isActive = {this.props.primaryNavigationBarSelection === 'hobbies-interests'}
            id = "hobbies-interests"
            name = "Hobbies & Interests"
            onClick = {this.props.handlePrimaryNavigationBarClick}
          />
          <PrimaryNavigationButton
            isActive = {this.props.primaryNavigationBarSelection === 'work-experience'}
            id = "work-experience"
            name = "Work Experience"
            onClick = {this.props.handlePrimaryNavigationBarClick}
          />
          {/* <PrimaryNavigationButton
            isActive = {this.props.primaryNavigationBarSelection === 'projects'}
            id = "projects"
            name = "Projects"
            onClick = {this.props.handlePrimaryNavigationBarClick}
          /> */}
          <PrimaryNavigationButton
            isActive = {this.props.primaryNavigationBarSelection === 'contact'}
            id = "contact"
            name = "Contact"
            onClick = {this.props.handlePrimaryNavigationBarClick}
          />
        </div>
      </div>
    )
  }
}



export default PrimaryNavigationBar;