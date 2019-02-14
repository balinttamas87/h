import React, { Component } from "react";
import "./App.css";
import Search from "./components/search";

class App extends Component {
  componentDidMount() {
    this.test();
  }

  test() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
        </header>
        <main className="App-main">
          <Search />
        </main>
      </div>
    );
  }
}

export default App;
