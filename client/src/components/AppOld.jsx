import React from 'react';
import ReactDOM from 'react-dom';
import AddLink from './AddLink';
import AddJournalEntry from './AddJournalEntry';
import JournalEntryList from './JournalEntryList';
import JournalEntryView from './JournalEntryView';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

  }

  onAddJournalEntryClick() {
    this.setState({ isOpen: !this.state.isOpen });
  };



  render() {

    return (
      <div id="app">
        <h1>MY TECHNICAL JOURNAL!!</h1>
        <div className="main">
                  <JournalEntryList className="attendee-form"/>

          <JournalEntryView className="attendees" currentItem={this.props.currentItem}/>
      </div>
      </div>

    );
  }

}

export default App;