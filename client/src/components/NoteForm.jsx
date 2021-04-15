import React from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/darcula.css'

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust'],
})

const modules = {
  syntax: {
    highlight: text => hljs.highlightAuto(text).value,
  },
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['code-block'],


    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown


    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],

  ],
  clipboard: {
    matchVisual: false,
  },
  // handlers: {
  //   image: this.imageHandler
  // }
};
const customModules = {
  toolbar: {
    container: '#toolbar'
  }
}

const formats = [
  'background',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
  'color',
  'script',
  'align',
];


class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveNote = this.handleSaveNote.bind(this);
    // this.imageHandler = this.imageHandler.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  handleSaveNote(event) {

    event.preventDefault();
    var body = {
      "note": this.state.text,
      "note_ref": this.props.module,
      "note_ref_id": this.props.currentId
    };
    console.log(body);
    return axios.post('/api/notes', body)
      .then(() => {
        alert('Note has been Added!');
      },
        () => {
          this.props.onClickAddNote()
        })
      .then(() => {
        this.setState({ text: '' })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    console.log('NOTE STATE', this.state, 'MODULE', this.props.module, 'CURRENT ID', this.props.currentId);
    return (
      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickAddNote} />
        <div className="form-modal-box  quillModal">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddNote}></i>
          <br></br>
          <div className="form-modal-title">ADD NEW NOTE</div>
          <form>

        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          theme="snow"
          modules={modules}
          formats={formats}
          customModules={customModules}
        />
            <br></br>
              <button className="form-modal-button" onClick={this.handleSaveNote}>SAVE NOTE</button>
            </form>

        </div>
      </div>

    );
  }
}


export default NoteForm;