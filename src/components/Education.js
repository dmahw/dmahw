import React from 'react';
import './css/Education.css';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
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
    )
  }
}

export default Education;