import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import introImage from '../images/bg-home.jpg';
import Menu from './menu';

class About extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <article id="intro">
          <h2 class="major">About Me</h2>
          <span class="image main"><img src={introImage} alt="" /></span>
          <p>Hi! My name is Bien, You can call me by BaoBoi</p>
          <p>I have been working on Web development for more than 5 years as Front-end developer. I have acquired knowledge of different tools and programming languages such as: PHP, MYSQL, Javascript, HTML and CSS, SCSS,  Gulp, Styleguide Driven, Pattern Lab…</p>
          <p>I work in scrum team, responsible on tasks assigned and always commit to finish them on time. I am good at time management, ready to study and challenge on new technologies.</p>
          <p>I love traveling, watching movie and reading books..</p>

          <h2 class="major">Education</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 class="major">Key Skills</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 class="major">Other Skill</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 class="major">Other Skill</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 class="major">Certification</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
        </article>
      </div>
    )
  }
}

export default About;
