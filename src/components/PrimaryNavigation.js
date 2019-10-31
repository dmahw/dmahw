import React from 'react';
import './css/PrimaryNavigation.css';
import './css/PrimaryNavigationSmall.css';
import MediaQuery from 'react-responsive'
import menuLogo from './../images/menu-24px.svg'
import closeMenuLogo from './../images/chevron_left-24px.svg'


class PrimaryNavigationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (this.props.reference !== null && this.props.reference !== undefined) {
        if (this.props.reference.current !== null && this.props.reference !== undefined) {
          const isTop = window.scrollY > this.props.reference.current.offsetTop - 600;
          if (isTop !== this.props.isActive) {
            this.props.onClick(this.props.id, null)
          }
        }
      }
    });
  }

  render() {
    return (
      <div>
        <MediaQuery minWidth={1000}>
          <button
            className={
              this.props.isActive ? "primary-navigation-button-active" : "primary-navigation-button"
            }
            onClick={() => this.props.onClick(this.props.id, this.props.reference)}
          >
            {this.props.name}
          </button>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
          <button
            className={
              this.props.isActive ? "primary-navigation-button-small-active" : "primary-navigation-small-button"
            }
            onClick={() => this.props.onClick(this.props.id, this.props.reference)}
          >
            {this.props.name}
          </button>
        </MediaQuery>
      </div>
    )
  }
}

class PrimaryNavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    if (!this.state.menuOpen) {
      document.getElementsByClassName("sidebar-small")[0].style.width = "275px"
      this.setState({   
        menuOpen: !this.state.menuOpen
      });
    } else {
      document.getElementsByClassName("sidebar-small")[0].style.width = "0px"
      this.setState({   
        menuOpen: !this.state.menuOpen
      });
    }
  }


  render() {
    return (
      <div className="wrapper">
        <MediaQuery minWidth={1000}>
          <div className="primary-nav-bar">
            <PrimaryNavigationButton
              isActive = {this.props.primaryNavigationBarSelection === 'home'}
              reference = {this.props.references.refHome}
              id = "home"
              name = "Home"
              onClick = {this.props.handlePrimaryNavigationBarClick}
            />
            <PrimaryNavigationButton
              isActive = {this.props.primaryNavigationBarSelection === 'about-me'}
              reference = {this.props.references.refAboutMe}
              id = "about-me"
              name = "About Me"
              onClick = {this.props.handlePrimaryNavigationBarClick}
            />
            <PrimaryNavigationButton
              isActive = {this.props.primaryNavigationBarSelection === 'education'}
              reference = {this.props.references.refEducation}
              id = "education"
              name = "Education"
              onClick = {this.props.handlePrimaryNavigationBarClick}
            />
            <PrimaryNavigationButton
              isActive = {this.props.primaryNavigationBarSelection === 'work-experience'}
              reference = {this.props.references.refWorkExperience}
              id = "work-experience"
              name = "Work Experience"
              onClick = {this.props.handlePrimaryNavigationBarClick}
            />
            <PrimaryNavigationButton
              isActive = {this.props.primaryNavigationBarSelection === 'hobbies-interests'}
              reference = {this.props.references.refHobbiesInterests}
              id = "hobbies-interests"
              name = "Hobbies & Interests"
              onClick = {this.props.handlePrimaryNavigationBarClick}
            />
            {/* <PrimaryNavigationButton
              isActive = {this.props.primaryNavigationBarSelection === 'projects'}
              reference = {this.state.references.refProjects}
              id = "projects"
              name = "Projects"
              onClick = {this.props.handlePrimaryNavigationBarClick}
            /> */}
            <PrimaryNavigationButton
              isActive = {this.props.primaryNavigationBarSelection === 'contact'}
              reference = {this.props.references.refContact}
              id = "contact"
              name = "Contact"
              onClick = {this.props.handlePrimaryNavigationBarClick}
            />
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={1000}>
          <div className="primary-nav-bar-small">
            { !this.state.menuOpen && 
              <button className="menu-logo" onClick={this.handleMenuClick}><img className="menu-logo-image" src={menuLogo} /></button>
            }
            { this.state.menuOpen && 
              <button className="menu-logo" onClick={this.handleMenuClick}><img className="menu-logo-image" src={closeMenuLogo} /></button>
            }
            <div className="sidebar-small">
              <PrimaryNavigationButton
                isActive = {this.props.primaryNavigationBarSelection === 'home'}
                reference = {this.props.references.refHome}
                id = "home"
                name = "Home"
                onClick = {this.props.handlePrimaryNavigationBarClick}
              />
              <PrimaryNavigationButton
                isActive = {this.props.primaryNavigationBarSelection === 'about-me'}
                reference = {this.props.references.refAboutMe}
                id = "about-me"
                name = "About Me"
                onClick = {this.props.handlePrimaryNavigationBarClick}
              />
              <PrimaryNavigationButton
                isActive = {this.props.primaryNavigationBarSelection === 'education'}
                reference = {this.props.references.refEducation}
                id = "education"
                name = "Education"
                onClick = {this.props.handlePrimaryNavigationBarClick}
              />
              <PrimaryNavigationButton
                isActive = {this.props.primaryNavigationBarSelection === 'work-experience'}
                reference = {this.props.references.refWorkExperience}
                id = "work-experience"
                name = "Work Experience"
                onClick = {this.props.handlePrimaryNavigationBarClick}
              />
              <PrimaryNavigationButton
                isActive = {this.props.primaryNavigationBarSelection === 'hobbies-interests'}
                reference = {this.props.references.refHobbiesInterests}
                id = "hobbies-interests"
                name = "Hobbies & Interests"
                onClick = {this.props.handlePrimaryNavigationBarClick}
              />
              {/* <PrimaryNavigationButton
                isActive = {this.props.primaryNavigationBarSelection === 'projects'}
                reference = {this.state.references.refProjects}
                id = "projects"
                name = "Projects"
                onClick = {this.props.handlePrimaryNavigationBarClick}
              /> */}
              <PrimaryNavigationButton
                isActive = {this.props.primaryNavigationBarSelection === 'contact'}
                reference = {this.props.references.refContact}
                id = "contact"
                name = "Contact"
                onClick = {this.props.handlePrimaryNavigationBarClick}
              />
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}



export default PrimaryNavigationBar;