import React from 'react';
import axios from 'axios';
import EntryView from './EntryView';
import ProjectList from './ProjectList';

class VideosList extends React.Component {
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
        </div>


    );
  }


};
export default VideosList;