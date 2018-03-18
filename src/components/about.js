import React, { Component } from 'react';
import introImage from '../images/bg-home.jpg';
import Menu from './menu';

class About extends Component {
  render() {
    return (
      <div>
        <Menu />
        <article id="intro">
          <h2 className="major">About Me</h2>
          <span className="image main"><img src={introImage} alt="" /></span>
          <p>Hi! My name is Bien, You can call me by BaoBoi</p>
          <p>I have been working on Web development for more than 5 years as Front-end developer. I have acquired knowledge of different tools and programming languages such as: PHP, MYSQL, Javascript, HTML and CSS, SCSS,  Gulp, Styleguide Driven, Pattern Lab…</p>
          <p>I work in scrum team, responsible on tasks assigned and always commit to finish them on time. I am good at time management, ready to study and challenge on new technologies.</p>
          <p>I love traveling, watching movie and reading books..</p>

          <h2 className="major">Education</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 className="major">Key Skills</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 className="major">Other Skill</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 className="major">Other Skill</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>

          <h2 className="major">Certification</h2>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
        </article>
      </div>
    )
  }
}

export default About;
