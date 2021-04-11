import React from 'react';
import axios from 'axios';
import App from './App';
import AddLink from './AddLink';


class JournalEntryView extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      linked: [],
      isOpen: false
    };
    this.getJournalEntryLinks = this.getJournalEntryLinks.bind(this);
    this.onAddLinksClicked = this.onAddLinksClicked.bind(this);
  }

  onAddLinksClicked() {
   // console.log('CLICKED');
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    this.getJournalEntryLinks();
  }

  getJournalEntryLinks() {

    axios.get(`api/entries/${this.props.currentItem.id}/links`, { params: { answer_id: this.props.currentItem.id }})
      .then((res) => {
        this.setState({
          linked: res.data
        });
      })
      .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ', err));
  }

  render() {
    console.log('CURRENT ITEM ID', this.state.linked)
    if (this.state.linked.length === 0) {
      return '';

    } else {
      let item = this.props.currentItem;
     // console.log('CURRENT ITEM', this.props.currentItem);



      return (

        <div className="journalContainer">
          <div className="journal">
            <div className="journalTitle"key={item.id}>
              {(new Date(item.entry_date).toDateString().slice(4))} | {item.title}
            </div>
          <div key={item.challenge} className="journalSubTitle">Challenge:
            <div className="journalText">{item.challenge}</div>
          </div>
            <div key={item.action_taken} className="journalSubTitle">Actions Taken:
            <div className="journalText">{item.action_taken}</div>
            </div>
            <div key={item.lesson_learned} className="journalSubTitle">Lessons Learned:
            <div className="journalText">{item.lesson_learned}</div>
            </div>
            <div className="journalSubTitle links">Links:
              <div>
                {/* <ul className="no-bullets">
              {this.state.linked.map(link => (
                <li key={link.id}><a href={link.url_link} target="_blank">{link.url_short}</a></li>
              ))}</ul> */}
            </div>
            </div>
            <br></br>
            <button style={{ display: "inline" }} onClick={this.onAddLinksClicked}>ADD LINKS</button>
        </div>
        </div>
      );
    }
  }

}

export default JournalEntryView;
