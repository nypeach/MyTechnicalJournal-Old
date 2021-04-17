import React from 'react';
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';

const customStyles = {
  menuPortal: base => ({ ...base, zIndex: 9999 }),
  control: (provided, state) => ({
    ...provided,
    marginTop: '12px',
    backgroundColor:  "#f6f6f6",
    minHeight: '36px',
    maxHeight: '36px',
    paddingTop: '0px',
    paddingBottom: '0px',
    verticalAlign: 'middle',
    borderColor: "#D8315B",
    boxShadow: "#D8315B",
    borderWidth: "2px",
    "&:hover": {
      borderColor: "#D8315B",
      borderWidth: "2px"
    }
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#f6f6f6"
  }),
  input: (provided, state) => ({
    ...provided,
    minHeight: '24px',
    maxHeight: '24px',
     backgroundColor: "#f6f6f6"
  }),
  container: base => ({
    ...base,
    flex: 4
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#f6f6f6" : '#D8315B',
    backgroundColor: state.isSelected ? '#D8315B' : "#f6f6f6",
    backgroundColor: state.isFocused ? "#D8315B" : "#f6f6f6",
    color: state.isFocused ? "#f6f6f6" : '#D8315B',
    fontSize: "16px"
  }),
}

class Keywords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      keywords: []
    };
    this.getKeywords=this.getKeywords.bind(this);

  }
  componentDidMount() {
    this.getKeywords();
  }

  getKeywords() {
    axios.get('/api/keywords')
      .then(res => {
       // console.log(res.data)
        const options = res.data.map(d => ({
          "value": d.id,
          "label": d.keyword
        }))
        this.setState({ selectOptions: options});
      })
      .catch(err => console.log('ERROR GETTING KEYWORDS ENTRIES', err));
  }

  handleChange (newValue, actionMeta) {
    console.group('Value Changed');
    console.log('NEWVALUE', newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  render() {
    return (

        <CreatableSelect
          isMulti
          onChange={this.props.handleKeywordChange}
          options={this.state.selectOptions}
          styles={customStyles}
          />

    );
  }
}

export default Keywords;