import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView';
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
          {this.props.listItems.map(item => (
            <li className="listItems" key={item.id} onClick={() => { this.props.onClickJournal(item)}}>
              {item.title}
            </li>
          ))}</ul>
        </div>
      </div>
    );
  }
};
export default JournalEntryList;