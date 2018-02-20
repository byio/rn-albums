// import libraries to make component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// make component
class AlbumList extends Component {
  
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
