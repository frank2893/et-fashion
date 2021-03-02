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