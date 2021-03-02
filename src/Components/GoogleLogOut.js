import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { LogOut } from '../js/Actions/index';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  responseGoogle = (res) => {
    console.log('respuesta', res);

    this.props.LogOut();
  }

  render() {
    return(
      <GoogleLogout
        clientId="341434028289-tsp78kmikir79a78e74s0u05m7fv211g.apps.googleusercontent.com"
        buttonText="Logout"
        render={renderProps => (
          <React.Fragment>
            <div className="custom-link" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log out
            </div>
            {/* <button className="btn btn-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <FontAwesomeIcon icon={faUser} /> Log out
            </button> */}
          </React.Fragment>
        )}
        onLogoutSuccess={this.responseGoogle}
      >
      </GoogleLogout>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    LogOut: item => dispatch(LogOut(item))
  };
}

const GoogleLogOut = connect(null, mapDispatchToProps)(Logout)

export default GoogleLogOut