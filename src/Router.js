import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import './App.css';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Category} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </section>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default Router