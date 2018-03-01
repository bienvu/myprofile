import React, { Component } from 'react';
import logo from '../logo.svg';
import myPicture from '../images/my-picture.jpg';
import Menu from './menu';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <article id="blog">
          <h2 class="major">Blog</h2>
          <p>Hi! My name is Bien, You can call me by BaoBoi</p>
          <p>I have been working on Web development for more than 5 years as Front-end developer. I have acquired knowledge of different tools and programming languages such as: PHP, MYSQL, Javascript, HTML and CSS, SCSS,  Gulp, Styleguide Driven, Pattern Lab…</p>
          <p>I work in scrum team, responsible on tasks assigned and always commit to finish them on time. I am good at time management, ready to study and challenge on new technologies.</p>
          <p>I love traveling, watching movie and reading books..</p>
        </article>
      </div>
    )
  }
}

export default Blog;
