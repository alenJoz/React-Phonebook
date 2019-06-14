import React from 'react';

const Spinner = () => {
  return (
    <React.Fragment>
      <div className="uk-overlay-default uk-position-cover custom-overlay">
        <div className="showbox">
          <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" data-stroke-width="4" data-stroke-miterlimit="10" />
            </svg>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Spinner;