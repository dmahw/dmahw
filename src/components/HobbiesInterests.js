import React from 'react';
import './css/HobbiesInterests.css';

class HobbiesInterests extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div ref={this.props.reference} className="hobbies-interests-container">
          <h1 className="hobbies-interests-header">Hobbies & Interests</h1>

          <div className="hobbies-interests-content">
            <div className="hobbies-interests-point-1">
              <div className="hobbies-interests-photo-1">
              </div>
              <div className="hobbies-interests-text-1">
                <h2>Badminton</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-2">
              <div className="hobbies-interests-photo-2">
              </div>
              <div className="hobbies-interests-text-2">
                <h2>Volleyball</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-3">
              <div className="hobbies-interests-photo-3">
              </div>
              <div className="hobbies-interests-text-3">
                <h2>Spikeball</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-4">
              <div className="hobbies-interests-photo-4">
              </div>
              <div className="hobbies-interests-text-4">
                <h2>Skiing</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-5">
              <div className="hobbies-interests-photo-5">
              </div>
              <div className="hobbies-interests-text-5">
                <h2>Hiking</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-6">
              <div className="hobbies-interests-photo-6">
              </div>
              <div className="hobbies-interests-text-6">
                <h2>Automotive & Driving</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-7">
              <div className="hobbies-interests-photo-7">
              </div>
              <div className="hobbies-interests-text-7">
                <h2>Piano & Music</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-8">
              <div className="hobbies-interests-photo-8">
              </div>
              <div className="hobbies-interests-text-8">
                <h2>Nature</h2>
              </div>
            </div>

            <div className="hobbies-interests-point-9">
              <div className="hobbies-interests-photo-9">
              </div>
              <div className="hobbies-interests-text-9">
                <h2>Technology</h2>
              </div>
            </div>
          </div>

        </div>
      </div> 
    )
  }
}

export default HobbiesInterests;