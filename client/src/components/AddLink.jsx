import React from 'react';
import axios from 'axios';

class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlShort: '',
      urlLink: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitLinks = this.handleSubmitLinks.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmitLinks(event) {
    let url_short = this.state.urlShort;
    let url_link = this.state.urlLink;

    event.preventDefault();
      var body = {
        "url_short": url_short,
        "url_link": url_link
      };
      return axios.post('/links', body)
        .then(() => {
          alert('Link has been Added!');
        })
        .then(() => {
          this.setState({
            urlShort: '',
            urlLink: ''
          })
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    return (
      <div >
      <form>
        <label>
          URL Short Name:
          <input
            name="urlShort"
            type="text"
            value={this.state.urlShort}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          URL Link:
          <input
            name="urlLink"
            type="text"
            value={this.state.urlLink}
            onChange={this.handleInputChange} />
        </label>
        <button onClick={this.handleSubmitLinks}>Add URL</button>
      </form>
      </div>
    );
  }
}

export default AddLink;