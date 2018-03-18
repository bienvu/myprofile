import React, { Component } from 'react';
import Menu from './menu';

class Contact extends Component {
  render() {
    return (
      <div>
        <Menu />
        <article id="contact">
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
        </article>
      </div>
    )
  }
}

export default Contact;
