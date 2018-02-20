// import libraries to make component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

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

  // render method
  render () {
    return (
      <View>
        <Text>AlbumList Class-based Component</Text>
      </View>
    );
  }

}

// make the component available to other parts of the app
export default AlbumList;
