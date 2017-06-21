import React from 'react';

// Video url placeholder
class VideoItem extends React.Component {
  render() {
    return (
      <li className="Video">
      {this.props.video.title} - {this.props.video.runtime}
      </li>
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

export default VideoItem;
