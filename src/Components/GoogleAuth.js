import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { logIn } from '../js/Actions/index';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    logIn: item => dispatch(logIn(item))
  };
}

class Login extends Component {
  constructor(props) {
    super(props);
  }

  responseGoogle = (res) => {
    console.log('respuesta', res);
    console.log('respuesta', res.profileObj);

    this.props.logIn(res.profileObj);
    // localStorage.setItem('user', JSON.stringify(res.profileObj));
  }

  render() {
    return (
      this.props.flag === false ?
        (
          <GoogleLogin
            clientId="341434028289-qn459jnoh7tbnhoe00gtk9c833umr89n.apps.googleusercontent.com"
            render={renderProps => (
              <React.Fragment>
                <div className="custom-link" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <FontAwesomeIcon icon={faUser} /> Log In
            </div>
                {/* <button className="btn btn-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <FontAwesomeIcon icon={faUser} /> Log In
            </button> */}
              </React.Fragment>
            )}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
        ) :
        (
          <GoogleLogin
            clientId="341434028289-33579ugjoo3g4m1jsc9kvng7e51vvk2q.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
        )
    )
  }
}

const GoogleAuth = connect(null, mapDispatchToProps)(Login);

export default GoogleAuth