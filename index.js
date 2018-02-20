// Import libraries for making a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

// Import components from other parts of the app
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component ({flex: 1} is needed for scrolling to work)
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
  );
};

// Render component to the device (register component to app registry)
AppRegistry.registerComponent('albums', () => App);
