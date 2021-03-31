import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView.jsx';
import JournalEntryList from './JournalEntryList.jsx';
import AddJournalEntry from './AddJournalEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      currentItem: {},
      isOpen: false
    };
    this.onClickJournalEntry = this.onClickJournalEntry.bind(this);
    this.onJournalEntryClicked = this.onJournalEntryClicked.bind(this);
    this.getJournalEntries = this.getJournalEntries.bind(this);
  }
  componentDidMount() {
    this.getJournalEntries('journal');
  }
  onClickJournalEntry(item) {
    console.log('CLICKED');
    this.setState({
      currentItem: item
    });
  }
  onJournalEntryClicked() {
    console.log('CLICKED');
    this.setState({ isOpen: !this.state.isOpen});
  }

  getJournalEntries() {

    axios.get('/journals')
      .then(res => {
        console.log('RES DATA', res.data);
        this.setState({ listItems: res.data, currentItem: res.data[0] });
      })
      .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ++++++++++', err));
  }

  render() {

    return (
      <div id="app">
        <h1>My Technical Journal</h1>
        <div className="main">
          <AddJournalEntry/>

          <JournalEntryList
          key={this.state.listItems + this.state.listItems.length}
          listItems={this.state.listItems}
          currentItem={this.state.currentItem}
          isOpen={this.state.isOpen}
          onClickJournalEntry={this.onClickJournalEntry}
          onJournalEntryClicked={this.onJournalEntryClicked}
          />

        </div>
      </div>
    );
  }

}

export default App;
