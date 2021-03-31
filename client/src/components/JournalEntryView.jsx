import React from 'react';
import JournalEntryList from './JournalEntryList';


class JournalEntryView extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

    };
    console.log(this.props.currentItem)
  }



  render() {
    console.log(this.props.currentItem)

    return (
      <div className="attendee-form">
        <h2>CHALLENGES</h2>


          <label htmlFor="firstName"> First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label htmlFor="lastName"> Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label htmlFor="eMail"> E-Mail:
          <input type="text" name="eMail" value={this.state.eMail} onChange={this.handleChange}></input>
          </label>


          <div className="radio-title">Shirt Size:</div>
          <div className="radio-row">
            XS<input type="radio" name="shirtSize" value="XS" onChange={this.handleChange} />
            S<input type="radio" name="shirtSize" value="S" onChange={this.handleChange} />
            M<input type="radio" name="shirtSize" value="M" onChange={this.handleChange} />
            L<input type="radio" name="shirtSize" value="L" onChange={this.handleChange} />
            XL<input type="radio" name="shirtSize" value="XL" onChange={this.handleChange} />
            XXL<input type="radio" name="shirtSize" value="XXL" onChange={this.handleChange} />
          </div>

        <div className="radio-title">Experience Level:</div>
        <div className="radio-row2">
          Beginner<input type="radio" name="experience" value="Beginner" onChange={this.handleChange} />
          Intermediate<input type="radio" name="experience" value="Intermediate" onChange={this.handleChange} />
          Expert<input type="radio" name="experience" value="Expert" onChange={this.handleChange} />
        </div>


      </div>
    );
  }

}

export default JournalEntryView;
