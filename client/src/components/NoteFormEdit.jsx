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


class NoteFormEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.handleEditedNote = this.handleEditedNote.bind(this);
    // this.imageHandler = this.imageHandler.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  handleEditedNote(event) {

    event.preventDefault();
    var body = {
      "note": this.state.text,
      "note_ref": this.props.module,
      "id": this.props.currentId
    };
    console.log(body);
    return axios.put('/api/entries/:id/notes', body)
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

  // imageHandler() {
  //   const input = document.createElement('input');
  //   input.setAttribute('type', 'file');
  //   input.setAttribute('accept', 'image/*');
  //   input.click();
  //   input.onchange = async function () {
  //     const file = input.files[0];
  //     console.log('User trying to uplaod this:', file);

  //     const id = await uploadFile(file); // I'm using react, so whatever upload function
  //     const range = this.quill.getSelection();
  //     const link = `${ROOT_URL}/file/${id}`;

  //     // this part the image is inserted
  //     // by 'image' option below, you just have to put src(link) of img here.
  //     this.quill.insertEmbed(range.index, 'image', link);
  //   }.bind(this); // react thing
  // }

  render() {
    console.log('NOTE STATE', this.state, 'MODULE', this.props.module, 'CURRENT ID', this.props.currentId);
    return (
      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickNoteEdit} />
        <div className="form-modal-box quillModal">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickNoteEdit}></i>
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
          placeholder={this.props.placeholder}
        />
            <br></br>
              <button className="form-modal-button" onClick={this.handleSaveNote}>SAVE NOTE</button>
            </form>

        </div>
      </div>

    );
  }
}


export default NoteFormEdit;