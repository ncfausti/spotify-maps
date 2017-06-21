import React from 'react';


// Video components placeholder
// All videos stored in State
// Fetch from API
class Videos extends React.Component {
  render() {
    return (
      <div id="videos-main">
        {this.props.test}
        <div>Some videos here</div>
        <div>Some videos here</div>
        <div>Some videos here</div>
        <div>Some videos here</div>
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
