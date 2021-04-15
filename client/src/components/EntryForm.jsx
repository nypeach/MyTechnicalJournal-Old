import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/darcula.css';
import LinksList from './LinksList';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: '12px',
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
    marginBottom: '32px',
  }),
  indicatorContainer: (provided, state) => ({
    ...provided,
    marginBottom: '32px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    marginBottom: '32px',
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    marginBottom: '32px',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    marginBottom: '42px',
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#f6f6f6"
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

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordOptions: [],
      projectOptions: [],
      keywords: [],
      newKeywords: [],
      pid: null,
      pname: '',
      title: '',
      challenge: '',
      action: '',
      lessons: '',
      notes: '',
      links: [],
      id: null
    };
    this.getKeywords = this.getKeywords.bind(this);
    this.getProjects = this.getProjects.bind(this);
    this.handleSelectKeyword = this.handleSelectKeyword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmitEntry = this.handleSubmitEntry.bind(this);

  }
  getLastEntry() {
    axios.get('/api/entries/max')
      .then(res => {
        // console.log(res.data)
        const data = res.data.map(d => ({
          "id": d.max
        }))
        this.setState({ id: data.id });
      })
      .catch(err => console.log('ERROR GETTING KEYWORDS ENTRIES', err));
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

  getProjects() {
    axios.get('/api/projects')
      .then(res => {
        // console.log(res.data)
        const projectOptions = res.data.map(d => ({
          "value": d.id,
          "label": d.title
        }))
        this.setState({ projectOptions: projectOptions });
      })
      .catch(err => console.log('ERROR GETTING KEYWORDS ENTRIES', err));
  }

  getLinks() {
    return axios.get(`/api/entries/${this.state.id}/links`, { params: { linked_ref_id: this.state.id } })
      .then(res => {
        console.log('RES FOR GET LINKS', res)
        this.setState({ links: res.data });
      })
      .catch(err => console.log('ERROR GETTING LINKS ENTRIES: ', err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSelectKeyword(newValue, actionMeta) {
    console.group('Value Changed');
    console.log('NEWVALUE', newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  handleProjectChange(event) {
    this.setState({ pid: event.value, pname: event.label })
  }
  handleKeywordChange(event) {
    let newItems = event.filter(item => item.hasOwnProperty('__isNew__'));
    let keywords = event.map(item => item.label);
    let newKeywords = newItems.map(item => `('${item.label}')`)
    this.setState({ keywords: keywords, newKeywords: newKeywords })
    //console.log('STATE OF THE STATES', this.state)
    //console.log(newKeywords.toString(''))
  }

  handleNoteChange(value) {
    this.setState({ notes: value })
  }

  handleSubmitEntry(event) {

    event.preventDefault();
    var body = {
      "title": this.state.title,
      "project_id": this.state.pid,
      "challenge": this.state.challenge,
      "action_taken": this.state.action,
      "lesson_learned": this.state.lessons,
      "keywords": this.state.keywords,
      "newKeywords": this.state.newKeywords,
      "notes": this.state.notes,
      "links": this.state.links
    };
    console.log(body);
    return axios.post('/api/keywords', body)
      .then(() => {
        alert('Keyword has been Added!');
      },
        () => {
          this.props.onClickAddKeyword()
        })
      .then(() => {
        this.setState({ keyword: '', id: '' })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getKeywords();
    this.getProjects();
  }

  render() {
    console.log('STATE OF THE STATE', this.state)
    return (

      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickAddEntry} />
        <div className="form-modal-box quillModal">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddEntry}></i>
          <br></br>
          <div className="form-modal-title">ADD NEW JOURNAL ENTRY</div>
          <form>

            <div className="wrapper">
              <div className="form-modal-label-select">Project</div>
              <Select
                options={this.state.projectOptions}
                styles={customStyles}
                onChange={this.handleProjectChange}
              />
            </div>

            <div className="wrapper">
              <div className="form-modal-label-select">Keywords</div>
              <CreatableSelect
                isMulti options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleKeywordChange}
              />
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Challenge </div>
              <input className="form-modal-input" name="challenge" type="text" value={this.state.challenge} onChange={this.handleInputChange}></input>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Action Taken </div>
              <input className="form-modal-input" name="action" type="text" value={this.state.action} onChange={this.handleInputChange}></input>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Lessons Learned </div>
              <input className="form-modal-input" name="lessons" type="text" value={this.state.lessons} onChange={this.handleInputChange}></input>
            </div>


            <div className="wrapper">
              <div className="form-modal-label-input outputText">Notes
              <div>
              <ReactQuill
                value={this.state.notes}
                onChange={this.handleNoteChange}
                theme="snow"
                modules={modules}
                formats={formats}
                customModules={customModules}
              />
              </div>
            </div>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-select">Links</div>
            </div>

            <div>
              <LinksList
                links={this.state.links}
                onClickAddLink={this.props.onClickAddLink}
              />
            </div>

          </form>
          <div>
            <button onClick={this.props.onClickAddLink}>ADD LINKS</button> <button onClick={this.handleSubmitEntry}>ADD JOURNAL ENTRY</button>
          </div>
        </div>

      </div>

    );
  }
}

export default EntryForm;