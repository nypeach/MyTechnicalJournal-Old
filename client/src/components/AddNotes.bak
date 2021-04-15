import React from 'react';
import axios from 'axios';
import QuillEditor from './QuillEditor';

class AddNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      keywords: '',
      mdText: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitLinks = this.handleSubmitLinks.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmitLinks(event) {

    event.preventDefault();
    var body = {
      "title": this.state.title,
      "keywords": this.state.keywords,
      "mdText": this.state.mdText
    };
    return axios.post('/notes', body)
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

      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onAddNoteClicked} />
        <div className="form-modal-box">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onAddNoteClicked}></i>
          <br></br>
          <form>
            <label>Title:
                <input name="urlShort" type="text" value={this.state.title} onChange={this.handleInputChange} />
            </label>
            <label>
              Keywords:
                <input name="urlLink" type="text" value={this.state.keywords} onChange={this.handleInputChange} />
            </label>
              <div>
              <QuillEditor/>
              </div>

            <button onClick={this.handleSubmitLinks}>Add URL</button>
          </form>
        </div>
      </div>

    );
  }
}

export default AddNotes;