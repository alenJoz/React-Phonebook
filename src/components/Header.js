import React from 'react';

export default class Header extends React.Component {


  render() {
    return (
      <div>
        <header data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" className="uk-sticky uk-sticky-fixed header-cls">
          <nav className="uk-navbar-container uk-navbar" data-uk-navbar>
            <div className="uk-navbar-item">
              <a className="uk-navbar-toggle uk-hidden@l uk-icon uk-navbar-toggle-icon" data-uk-toggle="" data-uk-navbar-toggle-icon="" href="#offcanvas-nav"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg></a>
            </div>
            <div className="uk-navbar-center">
              <a className="uk-navbar-item uk-logo" href="/">React Phonebook</a>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li>
                  <a href="#" aria-expanded="false" className="">
                    <span className="uk-visible@s uk-margin-small-right">Hello</span>
                    <div data-uk-navbar-toggle-icon="" className="uk-hidden@s uk-icon uk-navbar-toggle-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg></div>
                  </a>
                  <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ left: "1716.92px", top: "80px" }}>
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li><a href="/login.html">Logout</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }

}