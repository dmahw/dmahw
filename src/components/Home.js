import React from 'react';
import './css/Home.css';
import profilePhoto from './../images/profilePhoto.PNG'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hero-image">
                <div className="hero-self">
                    <img className="hero-photo" src={profilePhoto} alt="Profile Photo"></img>
                    <div className="hero-text">
                        <h1 ref={this.props.reference} className="hero-name">David Mah</h1>
                        <p className="hero-subtitle">Software Developer | Engineer</p>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Home;