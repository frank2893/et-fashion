import React, { Component } from 'react';
import { connect } from "react-redux";
import { addRequest } from "../js/Actions/index";
import "../css/Form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function mapDispatchToProps(dispatch) {
  return {
    addRequest: item => dispatch(addRequest(item))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      fullname: '',
      phone: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  sendForm(e) {
    e.preventDefault();
    let formRef = {
      subject: this.state.subject,
      fullname: this.state.fullname,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message
    }
    this.props.addRequest(formRef);
  }

  render () {
    return (
      <div className="custom-form-content">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.sendForm}>
              <fieldset>
                <legend>Any questions? Our advisors solve your doubts.</legend>
                <div className="input-field col s12">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" id="subject" autoComplete="off" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="fullname" className="form-label">Fullname</label>
                  <input type="text" id="fullname" autoComplete="off" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="text" id="phone" autoComplete="off" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="text" id="email" autoComplete="off" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <input type="text" id="message" autoComplete="off" className="form-control" onChange={this.handleChange} />
                </div>
                <div className="button-content">
                  <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faCheck} /> Send
              </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form