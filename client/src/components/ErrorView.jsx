import React from 'react';
import axios from 'axios';
import App from './App';
import LinksList from './LinksList';
import LinkForm from './LinkForm';
import NoteView from './NoteView';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/darcula.css'
// import Highlighter from './Highlighter'

hljs.configure({
  // languages: ['javascript', 'ruby', 'python', 'rust'],
  languages: ['javascript'],
})


class ErrorView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      noteEditOpen: false
    };
    this.onAddLinksClicked = this.onAddLinksClicked.bind(this);
    this.onClickNoteEdit = this.onClickNoteEdit.bind(this);
  }
  onAddLinksClicked() {
    // console.log('CLICKED');
    this.setState({ isOpen: !this.state.isOpen });
  }

  onClickNoteEdit() {
    this.setState({ noteEditOpen: !this.state.noteEditOpen})
  }

  render() {
    // console.log('CURRENT ITEM ID', this.state.linked)
    if (this.props.errors.length === 0) {
      return '';

    } else {
      const error = this.props.currentItem;
      return (

        <div className="journalContainer">
          <div className="journal">
            {/* <div className="journalDiv"><i className="fas fa-edit fa-2x"></i></div> */}

            <div className="journalTitle">
              {error.error_source} | {error.error_code}
            </div>

            <div className="journalSubTitle">ERROR TEXT:
            <div className="journalText">{error.error_text}</div>
            </div>


            <div className="journalSubTitle">ERROR NOTES:

                {/* <div className="noteDiv"><i className="fas fa-edit" onClick={this.props.onClickNoteEdit}></i></div> */}
                <div id="outputText" dangerouslySetInnerHTML={{ __html: this.props.currentItem.notes }}>
              </div>
            </div>

            {this.state.noteEditOpen ? (<NoteFormEdit placeholder={this.props.currentItem.notes} onClickNoteEdit={this.onClickNoteEdit} />) : null}


              <div className="journalSubTitle links">LINKS:
                <LinksList
                  currentEntry={this.props.currentItem}
                  links={this.props.links}
                />
              </div>
          </div>
        </div>
      );
    }
  }

}

export default ErrorView;
