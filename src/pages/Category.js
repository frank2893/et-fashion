import React, { Component } from "react";
import GoogleAuth from '../Components/GoogleAuth';
import { connect } from "react-redux";
import { getData } from "../js/Actions/index";
import "../css/Category.css";

export class Category extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData("https://jsonplaceholder.typicode.com/albums/1/photos");
  }

  render() {
    let categories;
    let userSession = this.props.userData;

    if (this.props.categories.length > 0) {
      categories = this.props.categories.map(
        (item) => {
          return (
            <div className="col-md-4" key={item.id}>
              <div className="card">
                <div className="card-image">
                  <img src={item.url} />
                  <span className="card-title">{item.title}</span>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          )
        }
      );
    }
    return (
      <React.Fragment>
          {
            Boolean(userSession.name) === true ?
              (
                <div className="container">
                  <div className="row">
                    {
                      categories
                    }
                  </div>
                </div>
              
              ) : (
              <div className="container-default container">
                  <div className="container-box">
                    <div className="container-text">
                      <span>Debes iniciar sesion para ver las categorias</span>
                    </div>
                    <div className="container-button">
                      <GoogleAuth flag={true} />
                    </div>
                  </div>
                </div>
              )
          }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.remoteCategories.slice(1, 10),
    userData: state.userData
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Category)