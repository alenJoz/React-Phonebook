import React from 'react';

import Avatar from '../images/avatar.jpg'
const ContactName = (props) => {
  return (
    <React.Fragment>
      
      <li>
        <a href="#">
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={Avatar}
            />
            {props.name}
              </div>
        </a>
      </li>
    </React.Fragment>
  )
}

export default ContactName;