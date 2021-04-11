import React from 'react';
import axios from 'axios';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: '12px',
    backgroundColor:  "#f6f6f6",
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
    marginBottom: '12px',
  }),
  indicatorContainer: (provided, state) => ({
    ...provided,
    marginBottom: '18px',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    marginBottom: '18px',
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

class StackTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: "",
      name: ''
    };
    this.getStackType=this.getStackType.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }
  componentDidMount() {
    this.getStackType();
  }

  getStackType() {
    axios.get('/stacktype')
      .then(res => {
        const options = res.data.map(d => ({
          "value": d.id,
          "label": d.type
        }))
        this.setState({ selectOptions: options});
        console.log(this.state)
      })
      .catch(err => console.log('ERROR GETTING KEYWORDS ENTRIES', err));
  }

  handleChange(e) {
    this.setState({ id: e.value, name: e.label })
  }

  render() {
    console.log(this.state.selectOptions)
    return (

     <Select
        options={this.state.selectOptions}
        styles={customStyles}
        handleChange={this.handleChange}
      />

    );
  }
}

export default StackTypes;