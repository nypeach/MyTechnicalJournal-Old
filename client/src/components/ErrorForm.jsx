import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/darcula.css';
import LinksList from './LinksList';
import LinkForm from './LinkForm';

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
  // languages: ['javascript', 'ruby', 'python', 'rust'],
  languages: ['javascript'],
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

class ErrorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordOptions: [],
      keywords: [],
      newKeywords: [],
      errorCode: '',
      errorText: '',
      errorSource: '',
      notes: null,
      links: []
    };
    this.getKeywords = this.getKeywords.bind(this);
    this.handleSelectKeyword = this.handleSelectKeyword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleErrorSourceChange = this.handleErrorSourceChange.bind(this);
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.handleLinksChangeUrl = this.handleLinksChangeUrl.bind(this);
    this.handleLinksChangeShort = this.handleLinksChangeShort.bind(this);
    this.handleOnClickAddLink = this.handleOnClickAddLink.bind(this);

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


  handleLinksChangeUrl(urlLink) {
    this.setState({ urlLink});
  }
  handleLinksChangeShort(urlShort) {
    this.setState({ urlShort });
  }
  handleOnClickAddLink() {
    const tempLinks = this.state.links;
    const linksCount = this.state.links.length + 1;
    tempLinks.push({ 'id': linksCount, 'url_short': this.state.urlShort, 'url_link': this.state.urlLink, 'linked_ref': 'errors', 'linked_ref_id': this.props.linked_ref_id})
    this.setState({urlLink: '', urlShort: ''})
    this.props.onClickAddLink();
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

  handleKeywordChange(event) {
    let newItems = event.filter(item => item.hasOwnProperty('__isNew__'));
    let keywords = event.map(item => item.label);
    let newKeywords = newItems.map(item => `('${item.label}')`)
    this.setState({ keywords: keywords, newKeywords: newKeywords })
  }

  handleNoteChange(value) {
    this.setState({ notes: value })
  }

  handleErrorSourceChange(event) {
    this.setState({ errorSource: event.label })
  }

  handleSubmitError(event) {

    event.preventDefault();
    console.log('CHECKING STATE LINKS',this.state.links)
    const newLinks = this.state.links.map(item => `('${item.url_short}','${item.url_link}', 'errors',${item.linked_ref_id})`)
    var body = {


      "error_code": this.state.errorCode,
      "error_text": this.state.errorText,
      "error_source": this.state.errorSource,
      "keywords": this.state.keywords,
      "newKeywords": this.state.newKeywords,
      "notes": this.state.notes,
      "links": newLinks
    };
    console.log(body);
    axios.post('/api/keywords/multiple', body.newKeywords)
      .catch(err => {
        console.log(err);
      })
    axios.post('/api/links/multiple', body.links)
      .catch(err => {
        console.log(err);
      })
    return axios.post('/api/errors', body)
      .then(results => {
        this.props.onUpdateErrorForm();
      })
      .then(results => {
        this.props.onClickAddError();
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
    const urlLink = this.state.urlLink;
    const links = this.state.links;
    return (

      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickAddError} />
        <div className="form-modal-box errorModal">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddError}></i>
          <br></br>
          <div className="form-modal-title">ADD NEW ERROR MESSAGE</div>
          <form>

            <div className="wrapperSelect">
              <div className="form-modal-label-select">Error Source</div>
              <Select
                options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleErrorSourceChange}
              />
            </div>

            <div className="wrapperSelect">
              <div className="form-modal-label-select">Keywords</div>
              <CreatableSelect
                isMulti options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleKeywordChange}
              />
            </div>
            <div className="wrapper">
              <div className="form-modal-label-input">Error Code </div>
              <input className="form-modal-input" name="errorCode" type="text" value={this.state.errorCode} onChange={this.handleInputChange}></input>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Error Text </div>
              <input className="form-modal-input" name="errorText" type="text" value={this.state.errorText} onChange={this.handleInputChange}></input>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input outputText">Notes
              <div>
              <ReactQuill
              className="quillModal"
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
              <ul className="no-bullets">
                {links.map(link => (
                  <li key={link.id}><a href={link.url_link} target="_blank">{link.url_short}</a></li>
                ))}
              </ul>
            </div>

          </form>
          <div>
            {this.props.linkOpen ? (<LinkForm urlLink={this.state.urlLink} urlShort={this.state.urlShort} handleLinksChangeUrl={this.handleLinksChangeUrl} handleLinksChangeShort={this.handleLinksChangeShort} getLinks={this.state.getLinks} handleOnClickAddLink={this.handleOnClickAddLink} linkOpen={this.props.linkOpen} onClickAddLink={this.props.onClickAddLink} />) : null}
            <button onClick={this.props.onClickAddLink}>ADD LINKS</button> <button onClick={this.handleSubmitError}>ADD ERROR MESSAGE</button>
          </div>
        </div>

      </div>

    );
  }
}

export default ErrorForm;