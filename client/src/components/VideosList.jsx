import React from 'react';
import axios from 'axios';
import JournalEntryView from './JournalEntryView';
import ProjectList from './ProjectList';

class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }



  render() {

    return (
      <div>

        <div><ul className="no-bullets">
          {this.props.videos.map(video => (
            <li className="listItems" key={video.id} onClick={() => {this.props.onClickVideo(video);}}>
              <div> {video.video_short}</div>
            </li>
          ))}</ul>
        </div>
        {/* {this.props.isOpen ? (<JournalEntryView key={this.props.currentItem.id} onClickJournalEntry={this.props.onClickJournalEntry} onJournalEntryClicked={this.props.onJournalEntryClicked} currentItem={this.props.currentItem} isOpen={this.props.isOpen} />) : null} */}

        </div>


    );
  }


};
export default Videos;