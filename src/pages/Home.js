import React, { Component } from "react";
import "../css/Home.css";
import { Link } from 'react-router-dom';

export class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="custom-slider">
          <div className="slider-title">
            <span>Bienvenido al sitio ofical de ET Fashion</span>
          </div>
          <div className="slider-button">
            <Link className="btn btn-primary" to="/categories">
              Nuestras categorias
            </Link>
          </div>
        </div>
        <div className="custom-items container">
          <div className="item-box">
            <div className="item-icon">
              <i class="medium material-icons">access_time</i>
            </div>
            <div className="item-p">
              <div className="item-title">
                <span>Performance</span>
              </div>
              <div className="item-content">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="item-icon">
              <i class="medium material-icons">event</i>
            </div>
            <div className="item-p">
              <div className="item-title">
                <span>Feature</span>
              </div>
              <div className="item-content">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="item-icon">
              <i class="medium material-icons">drafts</i>
            </div>
            <div className="item-p">
              <div className="item-title">
                <span>Feature</span>
              </div>
              <div className="item-content">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="item-icon">
              <i class="medium material-icons">filter</i>
            </div>
            <div className="item-p">
              <div className="item-title">
                <span>Feature</span>
              </div>
              <div className="item-content">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </span>
              </div>
            </div>
          </div>
          <div className="item-box">
            <div className="item-icon">
              <i class="medium material-icons">group</i>
            </div>
            <div className="item-p">
              <div className="item-title">
                <span>Feature</span>
              </div>
              <div className="item-content">
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home