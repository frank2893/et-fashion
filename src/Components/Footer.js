import React from 'react';
import Twitter from "../Image/icons-footer/gorjeo.png";
import Facebook from "../Image/icons-footer/facebook.png";
import Instagram from "../Image/icons-footer/instagram.png";
import Youtube from "../Image/icons-footer/youtube.png";

const Footer = () => {
    return (
        <footer className="page-footer black">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5 className="white-text">Address 1</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col-md-4">
                <h5 className="white-text">Address 2</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col-md-4">
                <h5 className="white-text">Address 3</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container container-footer">
              <div className="footer-copy">
                © ET Fashion
              </div>
              <div className="direction-social">
                <img src={Twitter} className="custom-icon-size" alt="Twitter" />
                <img src={Facebook} className="custom-icon-size" alt="Facebook" />
                <img src={Instagram} className="custom-icon-size" alt="Instagram" />
                <img src={Youtube} className="custom-icon-size" alt="Youtube" />
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;