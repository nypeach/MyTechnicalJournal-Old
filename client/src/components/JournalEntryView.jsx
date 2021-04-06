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

    axios.get('/links', {params: {linked_ref: 'Journal Entry',linked_ref_id: this.props.currentItem.id}})
      .then(res => {
      //  console.log('RES DATA', res.data);
        this.setState({ linked: res.data });
      })
      .catch(err => console.log('ERROR GETTING JOURNAL ENTRIES: ', err));
  }

  render() {
    if (this.props.currentItem === undefined) {
      return '';

    } else {
      let item = this.props.currentItem;
     // console.log('CURRENT ITEM', this.props.currentItem);



      return (

        <div>
              <h2 key={item.id}>{(new Date(item.entry_date).toDateString().slice(4))} | {item.title} </h2>
          <div key={item.challenge}><h3>Challenge:</h3>
            <div className="insideViewtext">{item.challenge}</div>
          </div>
            <div key={item.action_taken}><h3>Actions Taken:</h3>
            <div className="insideViewtext">{item.action_taken}</div>
            </div>
            <div key={item.lesson_learned}><h3>Lessons Learned:</h3>
            <div className="insideViewtext">{item.lesson_learned}</div>
            </div>
            <div><h3>Links:</h3>
            <div className="insideViewtext">
            <ul className="no-bullets">
              {this.state.linked.map(link => (
                <li key={link.id}><a href={link.url_link} target="_blank">{link.url_short}</a></li>
              ))}</ul>
            </div>
            </div>
            <br></br>
            <button style={{ display: "inline" }} onClick={this.onAddLinksClicked}>ADD LINKS</button>
        </div>

      );
    }
  }

}

export default JournalEntryView;
