import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import introImage from '../images/bg-home.jpg';
import Menu from './menu';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <article id="contact">
          <h2 class="major">Contact</h2>
          <form method="post" action="#">
            <div class="field half first">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send Message" class="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
        </article>
      </div>
    )
  }
}

export default Contact;
