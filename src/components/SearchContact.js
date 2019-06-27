import React from "react";

export default class SearchContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArray: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
  }

  handleSearch(event) {
    if (this.state.searchArray.length === 0) {
      this.setState({
        searchArray: [...this.props.contacts]
      });
      this.searchFilter(event);
    } else this.searchFilter(event);
  }

  searchFilter(event) {
    var updatedArray = [...this.state.searchArray];

    updatedArray = updatedArray.filter(function(item) {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.props.setContactList(updatedArray);
  }

  render() {
    return (
      <React.Fragment>
        <div className="uk-margin">
          <form className="uk-search uk-search-default uk-search-medium">
            <span data-uk-search-icon />
            <input
              className="uk-search-input"
              type="search"
              placeholder="Search Contacts..."
              onChange={this.handleSearch}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
