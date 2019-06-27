import React from "react";
import mockData from "../Services/MockData";
import Contact from "./Contact";
import SearchContact from "./SearchContact";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: []
    };
    this.setContactList = this.setContactList.bind(this)
  }

  componentDidMount() {
    this.setContactList(mockData.contacts);
  }

  setContactList(contacts) {
    this.setState({
      contactList: contacts
    });
  }

  render() {
    return (
      <aside className="tm-sidebar-left uk-visible@l">
        <div className="fixed-serch">
          <h3>Contacts</h3>
          <SearchContact
            setContactList={this.setContactList}
            contacts={this.state.contactList}
          />
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

        <Contact contacts={this.state.contactList} />
      </aside>
    );
  }
}
