import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView';

class JournalEntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }



  render() {

    return (
      <div className="attendees">
        <h2>Journal Entries</h2>

        <div><ul className="no-bullets">
          {this.props.listItems.map(item => (
            <li key={item.id} onClick={() => {this.props.onClickJournalEntry(item); this.props.onJournalEntryClicked()}}>
              {(new Date(item.entry_date).toDateString().slice(4))} | {item.title}
            </li>
          ))}</ul>
        </div>
        {this.props.isOpen ? (<JournalEntryView key={this.props.currentItem.id} onClickJournalEntry={this.props.onClickJournalEntry} onJournalEntryClicked={this.props.onJournalEntryClicked} currentItem={this.props.currentItem} isOpen={this.props.isOpen} />) : null}
      </div>

    );
  }


};
export default JournalEntryList;