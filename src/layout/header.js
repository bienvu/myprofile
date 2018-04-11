import React from 'react';
import myPicture from '../assets/images/my-picture.jpg';
import Menu from '../components/menu';

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="logo">
          <img src={myPicture}  alt="logo" />
        </div>
        <div className="content">
          <div className="inner">
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
