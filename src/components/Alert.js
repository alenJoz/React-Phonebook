import React from 'react';

const Alert = (props) => {

  return (
    <React.Fragment>
      <div data-uk-alert className="uk-alert-danger ">
        <a className="uk-alert-close" data-uk-close></a>
        <h3>{props.headingContent}</h3>
        <p>{props.messageContent}</p>
      </div>
    </React.Fragment>
  )
}

export default Alert;