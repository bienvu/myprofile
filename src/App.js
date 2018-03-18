import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/main.css';
import Header from './layout/header';
import Footer from './layout/footer';
import Work from './components/work';
import Contact from './components/contact';
import About from './components/about';
import Blog from './components/blog';
import Gallery from './components/gallery';
import Hobbies from './components/hobbies';
import Libraries from './components/libraries';
import Todo from './todos/todo';
import store from './redux/store'

var {Provider} = require('react-redux');
// var store = require('./redux/store.js');

class App extends Component {
  render() {
    return (
      <div className="App" id="wrapper">
        <Router>
          <div>
            <Route exact path='/' render={() => (<Header />)}/>
            <main id="main">
              <Route path='/gallery' component={Gallery} />
              <Route path='/work' component={Work} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/blog' component={Blog} />
              <Route path='/libraries' component={Libraries} />
              <Route path='/hobbies' component={Hobbies} />
              <Provider store={store} >
                <Route path='/todos' component={Todo} />
              </Provider>
              <ul className="icons">
                <li><Link to="https://www.linkedin.com/in/bienvt/" className="icon fa-linkedin" target="_blank"><span className="label">Linkedin</span></Link></li>
                <li><Link to="https://twitter.com/bienvuit" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></Link></li>
                <li><Link to="https://www.facebook.com/bienvu.it" className="icon fa-facebook" target="_blank"><span className="label">Facebook</span></Link></li>
                <li><Link to="https://www.instagram.com/bienvu.it/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></Link></li>
                <li><Link to="https://github.com/bienvu" className="icon fa-github" target="_blank"><span className="label">GitHub</span></Link></li>
              </ul>
            </main>
          </div>
        </Router>
        <Footer />
        <div id="bg"></div>
      </div>
    );
  }
}

export default App;
