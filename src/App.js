import React from 'react';
import Videos from './Components/Videos';
import './App.css';

// App componenets placeholder
class App extends React.Component {
  componenDidMount() {
    
  }
  constructor() {
    this.state = {
      videos: [
        {
          title: ''
        }
      ]
    }
  }
  render() {
    return (
      <div>
       <Videos test="sometest" />
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
