import React from 'react';
import marked from 'marked';
import NoteFormEdit from './NoteFormEdit';

class NoteView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {

    return (
      <div className="journalSubTitle journalNotes">Notes:
        <div id="outputContainer">
          <div className="noteDiv"><i className="fas fa-edit" onClick={this.props.onClickNoteEdit}></i></div>
          <div id="outputText" dangerouslySetInnerHTML={{__html: this.props.currentItem.notes}}></div>
        </div>
      </div>
    );
  }

}

export default NoteView;