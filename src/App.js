import React, { Component } from 'react';
import './App.css';
import Section from './Section.js';
import Carousel from './Carousel.js';

class App extends Component {

  render() {
    return (
      <div className="App">
          <section className="section-1">
            <Section movieNum="0"/>
          </section>
          <section className="section-2">
            <Section movieNum="1" flipped="true"/>
          </section>
          <section className="section-3">
            <Section movieNum="2" />
          </section>
          <Carousel />
          <div className="buffer"></div>
      </div>
    );
  }
}

export default App;
