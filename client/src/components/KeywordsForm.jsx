import React from 'react';
import axios from 'axios';
import StackTypes from './StackTypes';

class KeywordsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      stackTypeId: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmitLinks = this.handleSubmitLinks.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }


  // handleSubmitLinks(event) {

  //   event.preventDefault();
  //     var body = {
  //       "keyword": this.state.keyword,
  //       "stackTypeId": this.state.stackTypeId
  //     };
  //     return axios.post('/keywords', body)
  //       .then(() => {
  //         alert('Link has been Added!');
  //       })
  //       .then(() => {
  //         this.setState({
  //           keyword: '',
  //           stackTypeId: ''
  //         })
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  // }

  render() {
    return (

        <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onClickAddKeyword} />
          <div className="form-modal-box">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onClickAddKeyword}></i>
            <br></br>
            <div className="form-modal-title">ADD NEW KEYWORD</div>
            <form>
            {/* <label className="form-modal-label">Keyword:&nbsp;&nbsp;
                <input className="form-modal-input" name="keyword" type="text" value={this.state.keyword} onChange={this.handleInputChange} />
              </label>
              <br />

            <label className="form-modal-label">StackType:&nbsp;&nbsp;
                <StackTypes name="stackType" type="text" value={this.state.stackTypeId} onChange={this.handleInputChange} />
              </label> */}

              <div className="wrapper">
              <div className="form-modal-label-input">Keyword </div>
              <input className="form-modal-input" name="keyword" type="text" value={this.state.keyword} onChange={this.handleInputChange}></input>
              </div>

            <div className="wrapper">
              <div className="form-modal-label-select">Stack Type</div>
              <StackTypes name="stackType" type="text" value={this.state.stackTypeId} onChange={this.handleInputChange} />
            </div>
            <button className="form-modal-button" onClick={this.handleSubmitLinks}>ADD KEYWORD</button>
            </form>
          </div>
        </div>

    );
  }
}

export default KeywordsForm;