import React from 'react';
import axios from 'axios';
import Select from 'react-select';

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
    marginBottom: '22px',
  }),
  indicatorContainer: (provided, state) => ({
    ...provided,
    marginBottom: '18px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    marginBottom: '18px',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    marginBottom: '28px',
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

class KeywordsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: '',
      name: '',
      keyword: '',
    };
    this.getStackType = this.getStackType.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitKeyword = this.handleSubmitKeyword.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  getStackType() {
    axios.get('api/stacktypes')
      .then(res => {
        const options = res.data.map(d => ({
          "value": d.id,
          "label": d.type
        }))
        this.setState({ selectOptions: options });
      })
      .catch(err => console.log('ERROR GETTING STACK TYPES', err));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSelectChange(event) {
    this.setState({ id: event.value, name: event.label })
  }


  handleSubmitKeyword(event) {

    event.preventDefault();
      var body = {
        "keyword": this.state.keyword,
        "stacktype_id": this.state.id,
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
    this.getStackType();
  }

  render() {
    console.log('KEYWORD STATE', this.state)
    return (

      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickAddKeyword} />
        <div id="keyword" className="form-modal-box">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddKeyword}></i>
            <br></br>
            <div className="form-modal-title">ADD NEW KEYWORD</div>
            <form>
              <div className="wrapper">
              <div className="form-modal-label-input">Keyword </div>
              <input className="form-modal-input" name="keyword" type="text" value={this.state.keyword} onChange={this.handleInputChange}></input>
              </div>

            <div className="wrapper">
              <div className="form-modal-label-select">Stack Type</div>
              <Select options={this.state.selectOptions} styles={customStyles} onChange={this.handleSelectChange} />
            </div>
            <button className="form-modal-button" onClick={this.handleSubmitKeyword}>ADD KEYWORD</button>
            </form>
          </div>
        </div>

    );
  }
}

export default KeywordsForm;