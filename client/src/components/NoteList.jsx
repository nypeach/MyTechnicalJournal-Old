import React from 'react';
import axios from 'axios';
import NoteView from './NoteView';


class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div><ul className="no-bullets">
          {this.props.notes.map(note => (
            <li className="listItems" key={note.id} onClick={() => { this.props.onClickNote(note)}}>
              {note.title}
            </li>
          ))}</ul>
        </div>
      </div>
    );
  }
};
export default NoteList;