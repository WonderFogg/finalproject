import React, { Component } from 'react';

import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Omap from "./components/Omap";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Nav />
         <Omap />
         <List />

      </div>
    );
  }
}

export default App;
