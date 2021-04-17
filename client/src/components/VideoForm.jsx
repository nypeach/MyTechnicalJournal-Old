import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/darcula.css';
import VideosList from './VideosList';


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

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordOptions: [],
      keywords: [],
      newKeywords: [],
      videoShort: '',
      videoLink: ''
    };
    this.getKeywords = this.getKeywords.bind(this);
    this.handleSelectKeyword = this.handleSelectKeyword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleSubmitVideo = this.handleSubmitVideo.bind(this);
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

  handleSubmitVideo(event) {

    event.preventDefault();

    var body = {


      "video_short": this.state.videoShort,
      "video_link": this.state.videoLink,
      "keywords": this.state.keywords,
      "newKeywords": this.state.newKeywords
    };
    console.log(body);
    axios.post('/api/keywords/multiple', body.newKeywords)
      .catch(err => {
        console.log(err);
      })
    return axios.post('/api/videos', body)
      .then(results => {
        this.props.onUpdateVideoForm();
      })
      .then(results => {
        this.props.onClickAddVideo();
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
        <div className="form-modal-backdrop" onClick={this.props.onClickAddVideo} />
        <div className="form-modal-box quillModal">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddVideo}></i>
          <br></br>
          <div className="form-modal-title">ADD NEW VIDEO LINKS</div>
          <form>


            <div className="wrapper">
              <div className="form-modal-label-select">Keywords</div>
              <CreatableSelect
                isMulti options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleKeywordChange}
              />
            </div>
            <div className="wrapper">
              <div className="form-modal-label-input">Video Short Name</div>
              <input className="form-modal-input" name="videoShort" type="text" value={this.state.videoShort} onChange={this.handleInputChange}></input>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Video Link</div>
              <input className="form-modal-input" name="videoLink" type="text" placeholder="YouTube >> Share >> Embed >> Only Copy URL >> ex: https://www.youtube.com/embed/AgreDlNaUn4" value={this.state.videoLink} onChange={this.handleInputChange}></input>
            </div>

          </form>
          <div>
            <button onClick={this.handleSubmitVideo}>ADD VIDEOS</button>
          </div>
        </div >

      </div >

    );
  }
}

export default VideoForm;