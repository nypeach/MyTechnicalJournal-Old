import React from 'react';
import marked from 'marked';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/darcula.css'
import Highlighter from './Highlighter'

class NoteView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  render() {
    console.log('this.props.currentItem.notes', this.props.currentItem.notes)

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