import React from 'react';
import axios from 'axios';

class LinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlShort: '',
      urlLink: ''
    };

    // this.handleSubmitLinks = this.handleSubmitLinks.bind(this);
    this.handleChangeUrlLink = this.handleChangeUrlLink.bind(this);
    this.handleChangeUrlShort = this.handleChangeUrlShort.bind(this);

  }

  handleChangeUrlLink(e) {
    this.props.handleLinksChangeUrl(e.target.value);
  }
  handleChangeUrlShort(e) {
    this.props.handleLinksChangeShort(e.target.value);
  }


  // handleSubmitLinks(event) {

  //   event.preventDefault();
  //     var body = {
  //       "url_short": this.state.urlShort,
  //       "url_link": this.state.urlLink,
  //       "linked_ref": this.props.linked_ref,
  //       "linked_ref_id": this.props.linked_ref_id
  //     };
  //   return axios.post(`/api/${this.props.linked_ref}/${his.props.linked_ref_id}/links`, body)
  //       .then(() => {
  //         alert('Link has been Added!');
  //       })
  //       .then(() => {
  //         this.setState({
  //           urlShort: '',
  //           urlLink: ''
  //         }, () => {this.props.getLinks})
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  // }

  render() {
    const urlLink = this.props.urlLink;
    const urlShort = this.props.urlShort;
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
                <input className="form-modal-input" name="urlShort" type="text" value={urlShort} onChange={this.handleChangeUrlShort}></input>
              </div>
              <br></br>
              <div className="wrapper">
                <div className="form-modal-label-input">URL Link: </div>
                <input className="form-modal-input" name="urlLink" type="text" value={urlLink} onChange={this.handleChangeUrlLink}></input>
            </div>
            <button onClick={this.props.handleOnClickAddLink}>Add URL</button>
            </form>
          </div>
        </div>
    );
  }
}

export default LinkForm;