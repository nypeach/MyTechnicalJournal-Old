import React from 'react';
import axios from 'axios';
import EntryView from './EntryView';
import ProjectList from './ProjectList';

class JournalEntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div><ul className="no-bullets">
          {this.props.entries.map(entry => (
            <li className="listItems" key={entry.id} onClick={() => { this.props.onClickEntry(entry)}}>
              {entry.title}
            </li>
          ))}</ul>
        </div>
      </div>
    );
  }
};
export default JournalEntryList;