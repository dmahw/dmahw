import React from 'react';
import './css/Contact.css';
import './css/ContactSmall.css';
import MediaQuery from 'react-responsive'


class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <MediaQuery minWidth={800}>
          <div ref={this.props.reference} className="contact-container">
            <h1 className="contact-header">Contact</h1>
            <div className="contact-content">
              <a href="https://www.linkedin.com/in/david-mah-78575a122/"><button className="linked-in-logo"></button></a>
              <a href="https://github.com/dmahw"><button className="github-logo"></button></a>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <div ref={this.props.reference} className="contact-container-small">
            <h1 className="contact-header-small">Contact</h1>
            <div className="contact-content-small">
              <a href="https://www.linkedin.com/in/david-mah-78575a122/"><button className="linked-in-logo-small"></button></a>
              <a href="https://github.com/dmahw"><button className="github-logo-small"></button></a>
            </div>
          </div>
        </MediaQuery>
      </div>
      
    )
  }
}

export default Contact;