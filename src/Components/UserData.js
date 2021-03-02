import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../js/Actions/index";

export class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
  }

  render () {
    let user = this.props.userData;
    console.log('user', user)
    return (
      <p>
        {user.name !== '' &&
            user.name
        }
      </p>
    )
  }

}

function mapStateToProps(state) {
  console.log('Estado', state);
  return {
    userData: state.userData
  }
}

export default connect(
  mapStateToProps,
  { getUser }
)(User)