import React, { Component } from 'react';
import myPicture from '../images/my-picture.jpg';
import Menu from '../components/menu';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div class="logo">
          <img src={myPicture}  alt="logo" />
        </div>
        <div class="content">
          <div class="inner">
            <h1>Welcome to visit my Profile</h1>
            <p>Trying and Doing are two different things. <br />When you try, you hope. <br />When you do, you succeed!</p>
          </div>
        </div>
        <Menu />
      </header>
    )
  }
}

export default Header;
