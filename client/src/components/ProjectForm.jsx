import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

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


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordOptions: [],
      title: '',
      description: '',
      startDate: null,
      endDate: null,
      budget: null,
      frontEnd: [],
      backEnd: [],
      related: [],
      github: ''
    };
    this.getKeywords = this.getKeywords.bind(this);
    this.handleSelectKeyword = this.handleSelectKeyword.bind(this);
    this.handleFrontEndChange = this.handleFrontEndChange.bind(this);
    this.handleBackEndChange = this.handleBackEndChange.bind(this);
    this.handleRelatedChange = this.handleRelatedChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitProject = this.handleSubmitProject.bind(this);
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

  handleFrontEndChange(event) {
    let keywords = event.map(item => item.label);
    this.setState({ frontEnd: keywords })
  }
  handleBackEndChange(event) {
    let keywords = event.map(item => item.label);
    this.setState({ backEnd: keywords })
  }
  handleRelatedChange(event) {
    let keywords = event.map(item => item.label);
    this.setState({ related: keywords })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmitProject(event) {

    event.preventDefault();
    var body = {
      "title": this.state.title,
      "project_description": this.state.description,
      "project_start_date": this.state.startDate,
      "project_end_date": this.state.endDate,
      "project_budget": this.state.budget,
      "tech_front_end": this.state.frontEnd,
      "tech_back_end": this.state.backEnd,
      "tech_related": this.state.related,
      "github_url": this.state.github
    };
    console.log(body);
    return axios.post('/api/projects', body)
      .then(results => {
        this.props.onUpdateProjectForm();
      })
      .then(results => {
        this.props.onClickAddProject();
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
        <div className="form-modal-backdrop" onClick={this.props.onClickAddProject} />
        <div className="form-modal-box quillModal">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddProject}></i>
          <br></br>
          <div className="form-modal-title">ADD NEW PROJECT</div>
          <form>

            <div className="wrapperSelect">
              <div className="form-modal-label-select">Tech Stack Front End</div>
              <CreatableSelect
                isMulti
                options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleFrontEndChange}
              />
            </div>



            <div className="wrapperSelect">
              <div className="form-modal-label-select">Tech Stack Back End</div>
              <CreatableSelect
                isMulti
                options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleBackEndChange}
              />
            </div>


            <div className="wrapperSelect">
              <div className="form-modal-label-select">Tech Stack Related</div>
              <CreatableSelect
                isMulti
                options={this.state.keywordOptions}
                styles={customStyles}
                onChange={this.handleRelatedChange}
              />
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Project Title</div>
              <input className="form-modal-input" name="title" type="text" value={this.state.title} onChange={this.handleInputChange}></input>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Project Description</div>
              <input className="form-modal-input" name="description" type="text" value={this.state.description} onChange={this.handleInputChange}></input>
            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Start Date</div>
              <input className="form-modal-input" name="startDate" type="text" placeholder="Use YYYY-MM-DD Format" value={this.state.startDate} onChange={this.handleInputChange}></input>&nbsp;&nbsp;

              <div className="form-modal-label-input">End Date</div>
              <input className="form-modal-input" name="endDate" type="text" placeholder="Use YYYY-MM-DD Format" value={this.state.endDate} onChange={this.handleInputChange}></input>&nbsp;&nbsp;
              <div className="form-modal-label-input">Budget</div>
              <input className="form-modal-input" name="budget" type="text" placeholder="Do not use commas.  Only Numbers and decimal point." value={this.state.budget} onChange={this.handleInputChange}></input>

            </div>

            <div className="wrapper">
              <div className="form-modal-label-input">Github URL</div>
              <input className="form-modal-input" name="github" type="text" value={this.state.github} onChange={this.handleInputChange}></input>
            </div>
          </form>
          <div>
            <br></br>
            <button onClick={this.handleSubmitProject}>ADD PROJECT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectForm;