import React, { Component } from "react";
import Direction from "../Components/Direction";
import Form from "../Components/Form";
import "../css/Contact.css";

export class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container custom-contact">
        <Form />
        <Direction />
      </div>
    )
  }
}

export default Contact