import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView.jsx';
import JournalEntryList from './JournalEntryList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      currentItem: {}
    };
    this.onClickJournalEntry = this.onClickJournalEntry.bind(this);
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

          <JournalEntryView
          currentItem={this.state.currentItem}
          />

          <JournalEntryList
          listItems={this.state.listItems}
          onClickJournalEntry={this.onClickJournalEntry}
          />

        </div>
      </div>
    );
  }

}

export default App;
