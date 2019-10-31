import React from 'react';
import './css/Education.css';
import './css/EducationSmall.css';
import MediaQuery from 'react-responsive'

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <MediaQuery minWidth={1000}>
          <div ref={this.props.reference} className="education-container">
            <div className="education-row">
              <div className="education-1">
                <div className="education-photo-1"></div>
              </div>
              <div className="education-2">
                <h1 className="education-header-2">Education</h1>
                <p className="education-text-2">
                  <b>Bachelor of Software Engineering</b>
                  <br></br>
                  University of Victoria
                  <br></br>
                  <i>September 2014 - August 2019</i>
                </p>
              </div>
            </div>

            <div className="education-row">
              <div className="education-3">
                <button className="education-programming-button-3">C</button>
                <button className="education-programming-button-3">C++</button>
                <button className="education-programming-button-3">C#</button>
                <button className="education-programming-button-3">Python</button>
                <button className="education-programming-button-3">HTML</button>
                <button className="education-programming-button-3">JavaScript</button>
                <button className="education-programming-button-3">CSS</button>
                <button className="education-programming-button-3">SQL</button>
                <button className="education-programming-button-3">NoSQL</button>
                <button className="education-programming-button-3">Java</button>
                <button className="education-programming-button-3">Assembly</button>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={1000}>
          <div ref={this.props.reference} className="education-container-small">
            <h1 className="education-header-small">Education</h1>
            <div className="education-photo-container-small">
              <img className="education-photo-small"></img>
            </div>
            <div className="education-info-small">
              <p className="education-text-small">
                <b>Bachelor of Software Engineering</b>
                <br></br>
                University of Victoria
                <br></br>
                <i>September 2014 - August 2019</i>
              </p>
            </div>
            <div className="education-skills-small">
              <button className="education-button-small">C</button>
              <button className="education-button-small">C++</button>
              <button className="education-button-small">C#</button>
              <button className="education-button-small">Python</button>
              <button className="education-button-small">HTML</button>
              <button className="education-button-small">JavaScript</button>
              <button className="education-button-small">CSS</button>
              <button className="education-button-small">SQL</button>
              <button className="education-button-small">NoSQL</button>
              <button className="education-button-small">Java</button>
              <button className="education-button-small">Assembly</button>
            </div>
          </div>
        </MediaQuery>
      </div>
      
    )
  }
}

export default Education;