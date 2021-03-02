import React, { Component } from 'react';
import '../css/Direction.css';
import Twitter from "../Image/icons/gorjeo.png";
import Facebook from "../Image/icons/facebook.png";
import Instagram from "../Image/icons/instagram.png";
import Youtube from "../Image/icons/youtube.png";

export class Direction extends Component {
  render() {
    return (
      <div className="content-direction">
        <div className="direction-block">
          <div className="direction-title">
            <div>
              Mapa
            </div>
          </div>
        </div>
        <div className="direction-block">
          <div className="direction-title">
            <div className="direction-social">
              <img src={Twitter} className="custom-icon-size" alt="Twitter" />
              <img src={Facebook} className="custom-icon-size" alt="Facebook" />
              <img src={Instagram} className="custom-icon-size" alt="Instagram" />
              <img src={Youtube} className="custom-icon-size" alt="Youtube" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Direction