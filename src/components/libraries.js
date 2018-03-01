import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import introImage from '../images/bg-home.jpg';
import Menu from './menu';

class Libraries extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <article id="intro">
          <h2 class="major">Gallery</h2>
          <span class="image main"><img src={introImage} alt="" /></span>
          <p>Hi! My name is Bien, You can call me by BaoBoi</p>
          <p>I have been working on Web development for more than 5 years as Front-end developer. I have acquired knowledge of different tools and programming languages such as: PHP, MYSQL, Javascript, HTML and CSS, SCSS,  Gulp, Styleguide Driven, Pattern Lab…</p>
          <p>I work in scrum team, responsible on tasks assigned and always commit to finish them on time. I am good at time management, ready to study and challenge on new technologies.</p>
          <p>I love traveling, watching movie and reading books..</p>
        </article>
      </div>
    )
  }
}

export default Libraries;
