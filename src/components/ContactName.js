import React from "react";
import Avatar from "../images/avatar.jpg";
import { Link } from "react-router-dom";

const ContactName = props => {
  return (
    <React.Fragment>
      <li>
        <Link to={'/home/'+props.id}>
          <div className="uk-width-auto">
            <img
              className="uk-border-circle"
              width="40"
              height="40"
              src={Avatar}
            />
            {props.name}
          </div>
          </Link>
      </li>
    </React.Fragment>
  );
};

export default ContactName;