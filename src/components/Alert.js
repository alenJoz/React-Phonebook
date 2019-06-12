import React from 'react';

export default class Alert extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div data-uk-alert className="uk-alert-danger ">
          <a className="uk-alert-close" data-uk-close></a>
          <h3>Notice</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </React.Fragment>
    )
  }
}