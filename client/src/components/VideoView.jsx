import React from 'react';
import axios from 'axios';
import App from './App';
import AddLink from './AddLink';


class VideoView extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

    };

  }



  render() {
    console.log(this.props.currentVideo)
    if (this.props.currentVideo === undefined) {
      return '';

    } else {
      let video = this.props.currentVideo;
      // console.log('CURRENT ITEM', this.props.currentItem);



      return (

        <div>

          {/* <iframe className="videoView" src="https://www.youtube.com/embed/l8V59zIdBXU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
          <div className="videoContainer">
          <div className="video-player">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={this.props.currentVideo.video_link}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='video'
              />
            </div>
          </div>
        </div>
        </div>
      );
    }
  }

}

export default VideoView;
