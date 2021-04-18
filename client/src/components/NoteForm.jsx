import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/darcula.css';


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    marginBottom: '12px',
    backgroundColor: "#f6f6f6",
    minWidth: '300px',
    minHeight: '36px',
    maxHeight: '36px',
    paddingTop: '0px',
    paddingBottom: '0px',
    verticalAlign: 'middle',
    borderColor: "#D8315B",
    boxShadow: "#D8315B",
    borderWidth: "2px",
    color: '#051538',
    fontSize: '1.05rem',
    "&:hover": {
      borderColor: "#D8315B",
      borderWidth: "2px"
    }
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    marginBottom: '20px',
    overflow: 'scroll',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '95%',
    maxHeight: '36px',
  }),
  indicatorContainer: (provided, state) => ({
    ...provided,
    marginBottom: '20px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    marginBottom: '15px',
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    marginBottom: '20px',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    marginBottom: '30px',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#f6f6f6",
  }),
  input: (provided, state) => ({
    ...provided,
    minHeight: '24px',
    maxHeight: '24px',
    minWidth: '300px',
  }),
  container: base => ({
    ...base,
    flexGrow: 1,
    minWidth: '300px',
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: '-10px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#f6f6f6" : '#D8315B',
    backgroundColor: state.isSelected ? '#D8315B' : "#f6f6f6",
    backgroundColor: state.isFocused ? "#D8315B" : "#f6f6f6",
    color: state.isFocused ? "#f6f6f6" : '#D8315B',
    fontSize: "16px",
    minWidth: '300px',
  }),
}

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
    super(props);
    this.state = {
      keywordOptions: [],
      keywords: [],
      newKeywords: [],
      title: '',
      notes: null
    };
    this.getKeywords = this.getKeywords.bind(this);
    this.handleSelectKeyword = this.handleSelectKeyword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmitNote = this.handleSubmitNote.bind(this);
  }

  getKeywords() {
    axios.get('/api/keywords')
      .then(res => {
        // console.log(res.data)
        const keywordOptions = res.data.map(d => ({
          "value": d.id,
          "label": d.keyword
        }))
        this.setState({ keywordOptions: keywordOptions });
      })
      .catch(err => console.log('ERROR GETTING KEYWORDS ENTRIES', err));
  }

  handleSelectKeyword(newValue, actionMeta) {
    console.group('Value Changed');
    console.log('NEWVALUE', newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  handleKeywordChange(event) {
    let newItems = event.filter(item => item.hasOwnProperty('__isNew__'));
    let keywords = event.map(item => item.label);
    let newKeywords = newItems.map(item => `('${item.label}')`)
    this.setState({ keywords: keywords, newKeywords: newKeywords })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleNoteChange(value) {
    this.setState({ notes: value })
  }

  handleSubmitNote(event) {

    event.preventDefault();
    var body = {
      "title": this.state.title,
      "keywords": this.state.keywords,
      "newKeywords": this.state.newKeywords,
      "notes": this.state.notes,
    };
    console.log(body);
    axios.post('/api/keywords/multiple', body.newKeywords)
      .catch(err => {
        console.log(err);
      })
    return axios.post('/api/notes', body)
      .then(results => {
        this.props.onUpdateNoteForm();
      })
      .then(results => {
        this.props.onClickAddNote();
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getKeywords();
  }

  render() {
    console.log('STATE OF THE STATE', this.state)
    return (

      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickAddNote} />
        <div className="form-modal-box journalModal">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddNote}></i>
          <br></br>
          <div className="form-modal-title">ADD NEW NOTE</div>
          <form>

            <div className="wrapperSelect">
              <div className="form-modal-label-select">Keywords</div>
              <CreatableSelect
                isMulti options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleKeywordChange}
              />
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Title </div>
              <input className="form-modal-input" name="title" type="text" value={this.state.title} onChange={this.handleInputChange}></input>
            </div>

            <div>
              <ReactQuill
                className="noteModal"
                value={this.state.notes}
                onChange={this.handleNoteChange}
                theme="snow"
                modules={modules}
                formats={formats}
                customModules={customModules}
              />
              <br></br>
            </div>

          </form>
          <div>
            <br></br>
            <button onClick={this.handleSubmitNote}>ADD NOTE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteForm;