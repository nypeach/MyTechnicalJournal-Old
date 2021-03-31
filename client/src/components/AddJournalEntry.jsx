import React from 'react';
import axios from 'axios';

class AddJournalEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      projectId: 0,
      challenge: '',
      actionTaken: '',
      lessonLearned: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitJournalEntry = this.handleSubmitJournalEntry.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmitJournalEntry(event) {
  event.preventDefault();
    var body = {
      "title": this.state.title,
      "project_id": this.state.projectId,
      "challenge": this.state.challenge,
      "action_taken": this.state.actionTaken,
      "lesson_learned": this.state.lessonLearned
    };
    return axios.post('/journals', body)
      .then(() => {
        this.setState({
          title: '',
          projectId: 0,
          challenge: '',
          actionTaken: '',
          lessonLearned: ''
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
              <h2>ADD NEW ENTRY</h2>
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
          </form>
          <div className="attendee-form-button">
          <button style={{ display: "inline"}} onClick={this.handleSubmitJournalEntry}>ADD NEW ENTRY</button>&nbsp;&nbsp;<button style={{ display: "inline" }}>ADD LINKS</button>
        </div>
      </div>
    );
  }
}

export default AddJournalEntry;