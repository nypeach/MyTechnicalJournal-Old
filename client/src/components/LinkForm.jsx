import React from 'react';
import axios from 'axios';

class LinkForm extends React.Component {
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

    event.preventDefault();
      var body = {
        "url_short": this.state.urlShort,
        "url_link": this.state.urlLink,
        "linked_ref": this.props.linked_ref,
        "linked_ref_id": this.props.linked_ref_id
      };
    return axios.post(`/api/${this.props.linked_ref}/${his.props.linked_ref_id}/links`, body)
        .then(() => {
          alert('Link has been Added!');
        })
        .then(() => {
          this.setState({
            urlShort: '',
            urlLink: ''
          }, () => {this.props.getLinks})
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    return (

      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickAddLink} />
          <div className="form-modal-box">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddLink}></i>
            <br></br>
            <div className="form-modal-title">ADD NEW LINK</div>
            <form>
              <div className="wrapper">
                <div className="form-modal-label-input">URL Short Name: </div>
                <input className="form-modal-input" name="urlShort" type="text" value={this.state.urlShort} onChange={this.handleInputChange}></input>
              </div>
              <br></br>
              <div className="wrapper">
                <div className="form-modal-label-input">URL Link: </div>
                <input className="form-modal-input" name="urlLink" type="text" value={this.state.urlLink} onChange={this.handleInputChange}></input>
            </div>
            <button onClick={this.handleSubmitLinks}>Add URL</button>
            </form>
          </div>
        </div>
    );
  }
}

export default LinkForm;