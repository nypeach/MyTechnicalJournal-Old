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
    ['blockquote', 'code-block', 'code'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown


    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],

    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
  // handlers: {
  //   image: this.imageHandler
  // }
};

const formats = [
  'background',
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
  'color',
  'code',
  'script',
  'align',
  'direction'
];


class QuillEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    // this.imageHandler = this.imageHandler.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value })
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
    return (

      <ReactQuill
        value={this.state.text}
        onChange={this.handleChange}
        theme="snow"
        modules={modules}
        formats={formats}
      />
    );
  }
}


export default QuillEditor;