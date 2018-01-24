import React, { Component } from 'react';

import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Omap from "./components/Omap";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <Nav />
         <Omap />

      </div>
    );
  }
}

export default App;
