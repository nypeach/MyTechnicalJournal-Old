import React from 'react';
import App from './App';


class JournalEntryView extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

    };

  }



  render() {
    if (this.props.currentItem === undefined) {
      return '';

    } else {
      let item = this.props.currentItem;
      console.log('CURRENT ITEM', this.props.currentItem);



      return (
        <div className="attendee-form">
          <h2>CHALLENGES</h2>
          <div className="card">
            <div className="container">
              <h3 key={item.id}><b>{(new Date(item.entry_date).toDateString().slice(4))} | {item.title} </b></h3>
              <p key={item.challenge}><strong>Challenge: </strong><br></br>{item.challenge}</p>
              <p key={item.action_taken}><strong>Actions Taken:</strong><br></br> {item.action_taken}</p>
              <p key={item.lesson_learned}><strong>Lessons Learned: </strong><br></br>{item.lesson_learned}</p>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default JournalEntryView;
