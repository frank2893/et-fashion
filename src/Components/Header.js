import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import { connect } from "react-redux";
import GoogleLogOut from './GoogleLogOut';

class Header extends Component {
  render() {
    let userSession = this.props.userData;
    return (
      <React.Fragment>
        <nav className="black">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/about">
                  ¿Quienes Somos?
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contacto
                </Link>
              </li>
              <li>
                {Boolean(userSession.name) === true &&
                  <div className="custom-link">
                    {
                      userSession.name
                    }
                  </div>
                }
              </li>
              <li>
                {
                  Boolean(userSession.name) === true ?
                    (
                      <GoogleLogOut />
                    ) : (
                      <GoogleAuth flag={false} />
                    )
                }
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  {
                    Boolean(userSession.name) === true ?
                      (
                        <div>
                          {userSession.name}
                          <GoogleLogOut />
                        </div>
                      ) : (
                        <GoogleAuth />
                      )
                  }
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('estado', state);
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps)(Header)