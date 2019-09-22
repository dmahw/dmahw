import React from 'react';
import './css/HobbiesInterestsNavBar.css';

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
          this.props.isActive ? "hobbies-interests-nav-bar-button-active" : "hobbies-interests-nav-bar-button"
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
        <div className="hobbies-interests-nav-bar">
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'badminton'}
            id = "badminton"
            reference = {this.props.references.refBadminton}
            name = "Badminton"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'volleyball'}
            id = "volleyball"
            reference = {this.props.references.refVolleyball}
            name = "Volleyball"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'skiing'}
            id = "skiing"
            reference = {this.props.references.refSkiing}
            name = "Skiing"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'spikeball'}
            id = "spikeball"
            reference = {this.props.references.refSpikeball}
            name = "Spikeball"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'automotive-driving'}
            id = "automotive-driving"
            reference = {this.props.references.refAutomotiveDriving}
            name = "Automotive & Driving"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'piano-music'}
            id = "piano-music"
            reference = {this.props.references.refPianoMusic}
            name = "Piano & Music"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'nature'}
            id = "nature"
            reference = {this.props.references.refNature}
            name = "Nature"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
          <NavBarButton
            isActive = {this.props.hobbiesInterestsActive === 'technology'}
            id = "technology"
            reference = {this.props.references.refTechnology}
            name = "Technology"
            onClick = {this.props.handleHobbiesInterestsNavBarClick}
          />
        </div>
      </div>
    )
  }
}



export default HobbiesInterestsNavBar;