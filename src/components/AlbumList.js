// import libraries to make component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

// import other components
import AlbumDetails from './AlbumDetails';

// make component
class AlbumList extends Component {
  // init state (class-level property)
  state = {
    albums: []
  };

  // componentWillMount
  componentWillMount () {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(resData => {
        this.setState({
          albums: resData
        });
      });
  }

  // helper methods
  renderAlbums () {
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title} album={album}/>
    );
  }

  // render method
  render () {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }

}

// make the component available to other parts of the app
export default AlbumList;
