import React from 'react';
import './css/Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div ref={this.props.reference} className="contact-container">
        <h1 className="contact-header">Contact</h1>
        <div className="contact-content">
          <a href="https://www.linkedin.com/in/david-mah-78575a122/"><button className="linked-in-logo"></button></a>
          <a href="https://github.com/dmahw"><button className="github-logo"></button></a>
        </div>
      </div>
    )
  }
}

export default Contact;