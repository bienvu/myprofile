import React, { Component } from 'react';
import logo from '../logo.svg';
import myPicture from '../assets/images/my-picture.jpg';
import Intro from '../components/intro';

class Main extends React.Component {
  render() {
    return (
      <main id="main">
        <Intro />
      </main>
    )
  }
}

export default Main;
