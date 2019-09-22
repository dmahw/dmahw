import React from 'react';
import './css/WorkExperienceNavBar.css';

class NavBarButton extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (this.props.reference !== null) {
        if (this.props.reference.current !== null) {
          const isTop = window.scrollY > this.props.reference.current.offsetTop - 1000;
          if (isTop !== this.props.isActive) {
            this.props.onClick(this.props.id, null)
          }
        }
      }
    });
  }

  render() {
    return (
      <button
        className={
          this.props.isActive ? "work-experience-nav-bar-button-active" : "work-experience-nav-bar-button"
        }
        onClick={() => this.props.onClick(this.props.id, this.props.reference)}
      >
        {this.props.name}
      </button>
    )
  }
}

class HobbiesInterestsNavBar extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="work-experience-nav-bar">
          <NavBarButton
            isActive = {this.props.workExperienceActiveId === 'corvus-energy'}
            id = "corvus-energy"
            reference = {this.props.references.refCorvusEnergy}
            name = "Corvus Energy"
            onClick = {this.props.handleWorkExperienceNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.workExperienceActiveId === 'ge-digital'}
            id = "ge-digital"
            reference = {this.props.references.refGEDigital}
            name = "GE Digital"
            onClick = {this.props.handleWorkExperienceNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.workExperienceActiveId === 'ridge-theatre-playhouse'}
            id = "ridge-theatre-playhouse"
            reference = {this.props.references.refRidgeTheatrePlayhouse}
            name = "Ridge Theatre Playhouse"
            onClick = {this.props.handleWorkExperienceNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.workExperienceActiveId === 'beach-house-restaurant'}
            id = "beach-house-restaurant"
            reference = {this.props.references.refBeachHouse}
            name = "The Beach House Restaurant"
            onClick = {this.props.handleWorkExperienceNavBarClick}
          />
        </div>
      </div>
    )
  }
}



export default HobbiesInterestsNavBar;