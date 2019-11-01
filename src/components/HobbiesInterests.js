import React from 'react';
import './css/HobbiesInterests.css';
import './css/HobbiesInterestsSmall.css';
import MediaQuery from 'react-responsive'

class HobbiesInterests extends React.Component {
  render () {
    return (
      <div>
        <MediaQuery minWidth={1000}>
          <div ref={this.props.reference} className="hobbies-interests-container">
            <h1 className="hobbies-interests-header">Hobbies & Interests</h1>

            <div className="hobbies-interests-content">
              <div className="hobbies-interests-point-1">
                <img className="hobbies-interests-photo-1" alt=""></img>
                <h2 className="hobbies-interests-text-1">Badminton</h2>
              </div>

              <div className="hobbies-interests-point-2">
                <img className="hobbies-interests-photo-2" alt=""></img>
                <h2 className="hobbies-interests-text-2">Volleyball</h2>
              </div>

              <div className="hobbies-interests-point-3">
                <img className="hobbies-interests-photo-3" alt=""></img>
                <h2 className="hobbies-interests-text-3">Spikeball</h2>
              </div>

              <div className="hobbies-interests-point-4">
                <img className="hobbies-interests-photo-4" alt=""></img>
                <h2 className="hobbies-interests-text-4">Skiing</h2>
              </div>

              <div className="hobbies-interests-point-5">
                <img className="hobbies-interests-photo-5" alt=""></img>
                <h2 className="hobbies-interests-text-5">Hiking</h2>
              </div>

              <div className="hobbies-interests-point-6">
                <img className="hobbies-interests-photo-6" alt=""></img>
                <h2 className="hobbies-interests-text-6">Automotive</h2>
              </div>

              <div className="hobbies-interests-point-7">
                <img className="hobbies-interests-photo-7" alt=""></img>
                <h2 className="hobbies-interests-text-7">Piano</h2>
              </div>

              <div className="hobbies-interests-point-8">
                <img className="hobbies-interests-photo-8" alt=""></img>
                <h2 className="hobbies-interests-text-8">Nature</h2>
              </div>

              <div className="hobbies-interests-point-9">
                <img className="hobbies-interests-photo-9" alt=""></img>
                <h2 className="hobbies-interests-text-9">Technology</h2>
              </div>
            </div>

          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
          <div ref={this.props.reference} className="hobbies-interests-container-small">
            <h1 className="hobbies-interests-header-small">Hobbies & Interests</h1>

            <div className="hobbies-interests-content-small">
              <div className="hobbies-interests-point-1-small">
                <img className="hobbies-interests-photo-1-small" alt=""></img>
                <h2 className="hobbies-interests-text-1-small">Badminton</h2>
              </div>

              <div className="hobbies-interests-point-2-small">
                <img className="hobbies-interests-photo-2-small" alt=""></img>
                <h2 className="hobbies-interests-text-2-small">Volleyball</h2>
              </div>

              <div className="hobbies-interests-point-3-small">
                <img className="hobbies-interests-photo-3-small" alt=""></img>
                <h2 className="hobbies-interests-text-3-small">Spikeball</h2>
              </div>

              <div className="hobbies-interests-point-4-small">
                <img className="hobbies-interests-photo-4-small" alt=""></img>
                <h2 className="hobbies-interests-text-4-small">Skiing</h2>
              </div>

              <div className="hobbies-interests-point-5-small">
                <img className="hobbies-interests-photo-5-small" alt=""></img>
                <h2 className="hobbies-interests-text-5-small">Hiking</h2>
              </div>

              <div className="hobbies-interests-point-6-small">
                <img className="hobbies-interests-photo-6-small" alt=""></img>
                <h2 className="hobbies-interests-text-6-small">Automotive</h2>
              </div>

              <div className="hobbies-interests-point-7-small">
                <img className="hobbies-interests-photo-7-small" alt=""></img>
                <h2 className="hobbies-interests-text-7-small">Piano</h2>
              </div>

              <div className="hobbies-interests-point-8-small">
                <img className="hobbies-interests-photo-8-small" alt=""></img>
                <h2 className="hobbies-interests-text-8-small">Nature</h2>
              </div>

              <div className="hobbies-interests-point-9-small">
                <img className="hobbies-interests-photo-9-small" alt=""></img>
                <h2 className="hobbies-interests-text-9-small">Technology</h2>
              </div>
            </div>

          </div>
        </MediaQuery>
      </div> 
    )
  }
}

export default HobbiesInterests;