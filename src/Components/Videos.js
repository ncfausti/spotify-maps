import React from 'react';
import VideoItem from './VideoItem';
import AddVideo from './AddVideo';

// Video components placeholder
// All videos stored in State
// Fetch from API
class Videos extends React.Component {
  render() {
    let videoItems;
    if(this.props.videos){
      videoItems = this.props.videos.map(video => {
        console.log(video);
        return(<VideoItem key={video.title} video={video} />
        );
      });
    }

    return (
      <div id="videos-main">
        {videoItems}
        <AddVideo />
      </div>
    );
  }
}
//
// var item = 9;
//
// var TodoList = React.createClass({
//   render: function() {
//     function item(itemText) {
//       return <li>{itemText}</li>;
//     };
//     return <ul>{this.props.items.map(item)}</ul>;
//   }
// });

export default Videos
