import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import Header from './layout/header';
import Footer from './layout/footer';
import Work from './components/work';
import Contact from './components/contact';
import About from './components/about';
import Blog from './components/blog';
import Gallery from './components/gallery';
import Hobbies from './components/hobbies';
import Libraries from './components/libraries';
import Todos from './components/Todos'
// import Todo from './todos/todo';
import { connect } from 'react-redux';
import * as TodoActions from './actions';

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    // console.log(todos);
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
              <Route path='/todos' component={Todos} />
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

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
