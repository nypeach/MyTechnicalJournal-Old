import React from 'react';
import axios from 'axios';

class AddJournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>


        <div className="form-modal-wrapper">
          <div className="form-modal-backdrop" onClick={this.props.onAddJournalEntryClick} />
          <div className="form-modal-box">
            <i className="far fa-times-circle fa-2x" onClick={this.props.onAddReviewClick}></i>
            <div>

              <h2>Register Attendee</h2>
              <label>First Name:
          <input type="text"></input>
              </label>
              <label>Last Name:
          <input type="text"></input>
              </label>
              <button>REGISTER</button>
            </div>
            </div>
            </div>
            </div>

    );
  }
}

export default AddJournalEntry;