import React from 'react';
import axios from 'axios';
import App from './App';
import LinksList from './LinksList';


class JournalEntryView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    };
    this.onAddLinksClicked = this.onAddLinksClicked.bind(this);
  }
  onAddLinksClicked() {
    // console.log('CLICKED');
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    // console.log('CURRENT ITEM ID', this.state.linked)
    if (this.props.entries.length === 0) {
      return '';

    } else {
      const entry = this.props.currentEntry;
      return (

        <div className="journalContainer">
          <div className="journal">
            <div className="journalTitle" key={entry.id}>
              {(new Date(entry.entry_date).toDateString().slice(4))} | {entry.title}
            </div>
            <div key={entry.challenge} className="journalSubTitle">Challenge:
            <div className="journalText">{entry.challenge}</div>
            </div>
            <div key={entry.action_taken} className="journalSubTitle">Actions Taken:
            <div className="journalText">{entry.action_taken}</div>
            </div>
            <div key={entry.lesson_learned} className="journalSubTitle">Lessons Learned:
            <div className="journalText">{entry.lesson_learned}</div>
            </div>
              <div>
                <LinksList
                  currentEntry={this.props.currentItem}
                  links={this.props.links}
                  onAddLinksClicked={this.onAddLinksClicked}
                />
              </div>
              <br></br>
              <button onClick={this.onAddLinksClicked}>ADD LINKS</button>
          </div>
        </div>
      );
    }
  }

}

export default JournalEntryView;
