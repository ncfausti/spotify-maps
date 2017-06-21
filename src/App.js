import React from 'react';
import Videos from './Components/Videos';
import './App.css';

// MockBackend.listVideos = function() {
//   return [
//   {
  //  id: 1,
  //  title: "My video #1",
  //  publishedDate: "2015-08-13 00:00:00",
  //  description: "The description #2",
  //  coverImage: "http://link/to/image1",
  //  sortOrder: 0
// }, {
  //  id: 2,
  //  title: "My video #2",
  //  publishedDate: "2015-07-13 00:00:00",
  //  description: "The description #2",
  //  coverImage: "http://link/to/image2",
  //  sortOrder: 1
// }
//   // etc. would be good to have at least a 5-6 videos to play around with
//  ];
// }

// App componenets placeholder
class App extends React.Component {
  componentDidMount() {
    this.setState({videos: [
      {
        id: 1,
        title: "My video #1",
        publishedDate: "2015-08-13 00:00:00",
        description: "The description #2",
        coverImage: "http://link/to/image1",
        sortOrder: 0,
      },
      {
        id: 2,
        title: "My video #2",
        publishedDate: "2015-07-13 00:00:00",
        description: "The description #2",
        coverImage: "http://link/to/image2",
        sortOrder: 1
      },
      {
        id: 3,
        title: "My video #3",
        publishedDate: "2015-06-13 00:00:00",
        description: "The description #3",
        coverImage: "http://link/to/image3",
        sortOrder: 2
      },
    ]});
  }

  constructor() {
    super();
    this.state = {
      videos: []
    }
  }

  render() {
    return (
      <div className="App">
       <Videos videos={this.state.videos} />
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

export default App
