import React from 'react';
import Videos from './Components/Videos';
import './App.css';

// App componenets placeholder
class App extends React.Component {
  componentDidMount() {
    this.setState({videos: [
      {
        title: 'ham and milk',
        runtime: 127 // minutes
      },
      {
        title: 'ham and cheese',
        runtime: 499 // minutes
      },
      {
        title: 'pollo y leche',
        runtime: 30 // minutes
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
