import React from 'react';
import axios from 'axios';
import App from './App';
import LinksList from './LinksList';
import LinkForm from './LinkForm';
import NoteView from './NoteView';
import NoteFormEdit from './NoteFormEdit';


class EntryView extends React.Component {
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
    if (this.props.entries.length === 0) {
      return '';

    } else {
      const entry = this.props.currentItem;
      return (

        <div className="journalContainer">
          <div className="journal">
            <div className="journalDiv"><i className="fas fa-edit fa-2x"></i></div>
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

              <NoteView
              currentItem={this.props.currentItem}
              onClickAddNote={this.props.onClickAddNote}
              onClickNoteEdit={this.onClickNoteEdit}
              />

            {this.state.noteEditOpen ? (<NoteFormEdit placeholder={this.props.currentItem.notes} onClickNoteEdit={this.onClickNoteEdit} />) : null}


              <div className="journalSubTitle links">Links:
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

export default EntryView;
