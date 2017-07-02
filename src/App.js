import React from 'react';
import Videos from './Components/Videos';
import './App.css';
import $ from 'jquery';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

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

    // function drawMap(lat, lng) {
    //     var mymap = L.map('mapid').setView([lat, lng], 13);
    //     L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}',{
    //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //     maxZoom: 18,
    //     accessToken: 'pk.eyJ1IjoibmNmYXVzdGkiLCJhIjoiY2ozb2M2bnU0MDA1NTJxbjQzOGZob2thYyJ9.Xkb98mlUAX218AuCyfUdiA'
    //   }).addTo(mymap);
    // }

    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(savePosition);
    //     } else {
    //         alert("Geolocation is not supported by this browser.");
    //     }
    // }

    // function savePosition(position) {
    //     var lat = position.coords.latitude;
    //     var lng = position.coords.longitude;
    //     localStorage['lat'] = lat;
    //     localStorage['lng'] = lng;

    //     drawMap(lat, lng);
    // }

    // if(localStorage['lat']){
    //     console.log(localStorage);
    //     var lat = localStorage['lat'];
    //     var lng = localStorage['lng'];
    //     drawMap(lat, lng);
    //   }
    //   else {
    //     getLocation();
    //   }

      // $('.button-collapse').sideNav();
        // var mymap = L.map('mapid').setView([39.9526, -75.1652], 13);
      // var token_str = window.location.href.split('=')[1];
      // var spotify_token = token_str.substr(0, token_str.length - 11);

      // if(spotify_token)
      //   localStorage['spotify_token'] = spotify_token;

      // Place marker
      // Make ajax call to get current track
      // Show user profile image

  }


  constructor() {
    super();
    this.state = {
      videos: []
    }


  }

  render() {
    const position = [51.505, -0.09]

    return (
      <div className="App">
       <Map center={position} zoom={13}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
      </Popup>
    </Marker>
  </Map>
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
