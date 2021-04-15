import React from 'react';
import axios from 'axios';
import App from './App';
import LinkForm from './LinkForm';


class VideoView extends React.Component {

  render() {
    console.log(this.props.currentItem)
    if (this.props.currentItem === undefined) {
      return '';
    } else {
      const video = this.props.currentItem;
      return (

        <div>
          <div className="videoContainer">
            <div className="video-player">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={video.video_link}
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
