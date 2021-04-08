import VideoListEntry from './VideoListEntry.js';


var VideoList = ({videos, handleOnClickListEntry}) => (
  <div className="video-list">
    {videos.map((video) => (
      <VideoListEntry
        video={video}
        key={video.id.videoId}
        handleOnClickListEntry={handleOnClickListEntry}
      />
    )
    )}
  </div>

);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

/*
  <div>
    {videos.map(video =>(
      <div className="video-list">
        <div><h5><em key={video.title}>{video.title}</em>KWEK</h5></div>
      </div>
    ))}
  </div>
*/


/*

var VideoList = (props) => (
  <ul>
    {props.items.map(item =>
      <VideoListItem item={item} />
    )}
  </ul>
);


class VideoListItem extends React.Component {
  constructor(props) {
    super(props);

   // `state` is just an object literal
  this.state = {
    done: false
  };
}


render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      //textDecoration: this.state.done ? 'line-through' : 'none'
      "font-weight": this.state.hover ? 'bold' : 'normal'
    };



var videoItems = function (exampleVideoData) {
  for (items in exampleVideoData) {
    exampleVideoData[items];
  }
};

ReactDOM.render(<VideoList items={videoItems} />, document.getElementById("app")
*/