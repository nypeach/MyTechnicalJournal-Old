import React from 'react';
import axios from 'axios';

class JournalEntryList extends React.Component {
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
    this.setState({
      currentItem: item
    });
  }

  getJournalEntries() {

    axios.get('/journals')
      .then(res => {
        console.log(res.data);
        this.setState({listItems: res.data, currentItem:res.data[0]});
      })
      .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ++++++++++', err));
  }


  render() {

    return (
      <div className="attendees">
        <h2>JOURNAL ENTRIES</h2>

        <div><ul className="no-bullets">
          {this.state.listItems.map(item => (
            <li key={item.id} onClick={() => this.onClickJournalEntry(item)}>
              {item.entry_date.substring(0,10)} | {item.title}
            </li>
          ))}</ul>
        </div>

      </div>

    );
  }


};
export default JournalEntryList;