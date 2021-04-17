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
    if (this.props.currentItem === undefined) {
      return '';

    } else {
      const note = this.props.currentItem;

      return (

        <div className="journalContainer">
          <div className="journal">
            <div className="journalDiv"><i className="fas fa-edit fa-2x"></i></div>

            <div className="journalTitle">
              {note.title}
            </div>
            {/* <div className="noteDiv"><i className="fas fa-edit" onClick={this.props.onClickNoteEdit}></i></div> */}
            <div id="outputText" dangerouslySetInnerHTML={{ __html: this.props.currentItem.notes }}>
            </div>

            {this.state.noteEditOpen ? (<NoteFormEdit placeholder={this.props.currentItem.notes} onClickNoteEdit={this.onClickNoteEdit} />) : null}

          </div>
        </div>
      );
    }
  }
}

export default NoteView;