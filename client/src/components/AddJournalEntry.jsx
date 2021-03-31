import React from 'react';
import axios from 'axios';
import AddLink from './AddLink';
import Keywords from './Keywords';

class AddJournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      projectId: 0,
      challenge: '',
      actionTaken: '',
      lessonLearned: '',
      isOpen: false,
      keywords: [],
      newKeywords:{}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitJournalEntry = this.handleSubmitJournalEntry.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleKeywordChange(event) {
    let newItems = event.filter(item => item.hasOwnProperty('__isNew__'));
    let keywords = event.map(item => item.label);
    let newKeywords = newItems.map(item => `('${item.label}')`)
    this.setState({keywords:keywords, newKeywords: newKeywords})
    console.log('STATE OF THE STATES', this.state)
    console.log(newKeywords.toString(''))
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
    console.log('STATE', this.state)
  }

  handleSubmitJournalEntry(event) {
  event.preventDefault();
    var body = {
      "title": this.state.title,
      "project_id": this.state.projectId,
      "challenge": this.state.challenge,
      "action_taken": this.state.actionTaken,
      "lesson_learned": this.state.lessonLearned,
      "keywords": this.state.keywords,
      "newKeywords": this.state.newKeywords
    };
    return axios.post('/journals', body)
      .then(() => {
        return axios.post('/keywords', body)
      })
      .then(() => {
        this.setState({
          title: '',
          projectId: 0,
          challenge: '',
          actionTaken: '',
          lessonLearned: '',
          isOpen: false,
          keywords: [],
          newKeywords: {}
        })
      })
      .then(() => {
        alert('A new Journal Entry was added');
      })
      .then(() => {
        this.props.getJournalEntries();
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
        <div className="attendee-form">
              <h2>Add New Entry</h2>
        <form>
          <label>Title:
          <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange}/>
          </label>
          <label>Challenge:
          <input name="challenge" type="text" value={this.state.challenge} onChange={this.handleInputChange} />
          </label>
          <label>Action Taken:
          <input name="actionTaken" type="text" value={this.state.actionTaken} onChange={this.handleInputChange} />
          </label>
          <label>Lesson Learned:
          <input name="lessonLearned" type="text" value={this.state.lessonLearned} onChange={this.handleInputChange} />
          </label>
          <label>Keywords:
        <Keywords handleKeywordChange={this.handleKeywordChange} />
        </label>
        </form>
          <div className="attendee-form-button">
          <button style={{ display: "inline"}} onClick={this.handleSubmitJournalEntry}>ADD NEW ENTRY</button>&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

export default AddJournalEntry;