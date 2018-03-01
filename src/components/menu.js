import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <nav className="main-menu">
        <ul>
          <li><Link to="/" className="home"><i className="fa fa-home"></i></Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/hobbies">Todos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/libraries">Libraries</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Menu;
