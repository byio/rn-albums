// import libraries
import React from 'react';
import { View, Text, Image } from 'react-native';

// import other necessary components
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// make component (destructure album from props)
const AlbumDetails = ({ album }) => {
  // destructure album object
  const { title, artist, thumbnail_image, image } = album;
  // detructure styles object
  const {
    headerTextContainerStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerTextContainerStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

// styles
const styles = {
  headerTextContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

// export component
export default AlbumDetails;
