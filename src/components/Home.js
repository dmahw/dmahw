import React from 'react';
import './css/Home.css';
import './css/HomeSmall.css';
import profilePhoto from './../images/profilePhoto.PNG'
import MediaQuery from 'react-responsive'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MediaQuery minWidth={800}>
                    <div className="hero-image">
                        <div className="hero-self">
                            <img className="hero-photo" src={profilePhoto} alt="Profile Photo"></img>
                            <div className="hero-text">
                                <h1 ref={this.props.reference} className="hero-name">David Mah</h1>
                                <p className="hero-subtitle">Software Developer | Engineer</p>
                            </div>
                        </div>
                    </div> 
                </MediaQuery>
                

                <MediaQuery maxWidth={800}>
                    <div className="hero-image-small">
                        <div className="hero-self-small">
                            <img className="hero-photo-small" src={profilePhoto} alt="Profile Photo"></img>
                            <div className="hero-text-small">
                                <h1 ref={this.props.reference} className="hero-name-small">David Mah</h1>
                                <p className="hero-subtitle-small">Software Developer<br />Engineer</p>
                            </div>
                        </div>
                    </div> 
                </MediaQuery>
            </div>
        )
    }
}

export default Home;

/*
var MediaQuery = require('react-responsive');

var A = React.createClass({
  render: function(){
    return (
      <div>
        <div>Device Test!</div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div>You are a desktop or laptop</div>
          <MediaQuery query='(min-device-width: 1824px)'>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query='(max-width: 1224px)'>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery query='(orientation: portrait)'>
          <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery query='(orientation: landscape)'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery query='(min-resolution: 2dppx)'>
          <div>You are retina</div>
        </MediaQuery>
      </div>
    );
  }
});
*/
