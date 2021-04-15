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

class ModulesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleOptions: [],
      refOptions: [],
      moduleId: 1,
      ref: 'entries',
      refId: '',
      refName: ''
    };
    this.handleModuleSelect = this.handleModuleSelect.bind(this);
    this.handleRefSelect = this.handleRefSelect.bind(this);
    this.getModules = this.getModules.bind(this);
    this.getRefId = this.getRefId.bind(this);
  }

  getModules() {
    axios.get('api/modules')
      .then(res => {
        const moduleOptions = res.data.map(d => ({
          "value": d.id,
          "label": d.module
        }))
        this.setState({
          moduleOptions: moduleOptions
        }, () => {
          this.getRefId();
        });
      })
      .catch(err => console.log('ERROR GETTING MODULES', err));
  }

  getRefId() {
    axios.get(`api/${this.state.ref}`)
      .then(res => {
        const refOptions = res.data.map(d => ({
          "value": d.id,
          "label": d.title
        }))
        this.setState({ refOptions: refOptions });
      })
      .catch(err => console.log('ERROR GETTING REFS', err));
  }

  handleModuleSelect(event) {
    this.setState({
      moduleId: event.value, ref: event.label
    }, () => {
      this.getRefId();
    })
  }
  handleRefSelect(event) {
    this.setState({ refId: event.value, refName: event.label })
  }

  componentDidMount() {
    this.getModules();
  }

  render() {
    console.log('MODULE STATE', this.state)
    return (
      <div>
        <div className="wrapper">
          <div className="form-modal-label-select">Module</div>
          <Select options={this.state.moduleOptions} styles={customStyles} onChange={this.handleSelectChange} />
        </div>
        <div className="wrapper">
          <div className="form-modal-label-select">References</div>
          <Select options={this.state.refOptions} styles={customStyles} onChange={this.handleSelectChange} />
        </div>
      </div>
    );
  }
}

export default ModulesSelect;