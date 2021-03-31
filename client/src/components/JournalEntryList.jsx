import React from 'react';
import axios from 'axios';

class JournalEntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }



  render() {

    return (
      <div className="attendees">
        <h2>JOURNAL ENTRIES</h2>

        <div><ul className="no-bullets">
          {this.props.listItems.map(item => (
            <li key={item.id} onClick={() => this.props.onClickJournalEntry(item)}>
              {(new Date(item.entry_date).toDateString().slice(4))} | {item.title}
            </li>
          ))}</ul>
        </div>

      </div>

    );
  }


};
export default JournalEntryList;