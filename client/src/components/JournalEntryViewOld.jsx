import React from 'react';
import axios from 'axios';

var JournalEntryView = (props) => {
  if (props.currentItem === undefined) {
    return null;
  } else {
    return (
      <div>
      <div className="card">
        <div className="container">
          <h2 key={props.currentItem.title}><b>Information about {props.currentItem.title} Cow</b></h2>
          <p key={props.currentItem.challenge}>{props.currentItem.challenge}</p>
        </div>
      </div>
    )
  }
};

export default JournalEntryView;