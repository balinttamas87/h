import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    console.log("search");
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="site-search">Search</label>
        <input
          type="search"
          id="site-search"
          name="q"
          aria-label="Search through site content"
        />

        <button onClick={this.search}>Search</button>
      </React.Fragment>
    );
  }
}

export default Search;
