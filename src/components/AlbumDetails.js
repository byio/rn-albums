// import libraries
import React from 'react';
import { View, Text } from 'react-native';

// make component
const AlbumDetails = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
      <Text>{props.album.artist}</Text>
    </View>
  );
};

// export component
export default AlbumDetails;
