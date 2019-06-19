import React from 'react';
import mockData from '../Services/MockData'
import commonService from '../Services/CommonService'
import Contact from './Contact';

const SideBar = ()=>{
  console.log(mockData.contacts.sort(commonService.compare));
    return (
        <aside className="tm-sidebar-left uk-visible@l">
        <div className="fixed-serch">
          <h3>Contacts</h3>
  
          <div className="uk-margin">
            <form className="uk-search uk-search-default uk-search-medium">
              <span data-uk-search-icon></span>
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search Contacts..."
              />
            </form>
          </div>
        </div>
  
        <div className="a-list">
          <a href="#a">A</a>
          <a href="#b">B</a>
          <a href="#c">C</a>
          <a href="#d">D</a>
          <a href="#e">E</a>
          <a href="#f">F</a>
          <a href="#g">G</a>
          <a href="#h">H</a>
          <a href="#i">I</a>
          <a href="#j">J</a>
          <a href="#k">K</a>
          <a href="#l">L</a>
          <a href="#m">M</a>
          <a href="#n">N</a>
          <a href="#o">O</a>
          <a href="#p">P</a>
          <a href="#q">Q</a>
          <a href="#r">R</a>
          <a href="#s">S</a>
          <a href="#t">T</a>
          <a href="#u">U</a>
          <a href="#v">V</a>
          <a href="#w">W</a>
          <a href="#x">X</a>
          <a href="#y">Y</a>
          <a href="#z">Z</a>
        </div>
  
        {/* <ul className="uk-nav uk-nav-default tm-nav  uk-list-divider"> */}
        <Contact contacts = { mockData.contacts }/>
  
        {/* </ul> */}
      </aside>
    )
}

export default SideBar;