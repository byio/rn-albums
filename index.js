// Import libraries for making a component
import React from 'react';
import { AppRegistry } from 'react-native';

// Import components from other parts of the app
import Header from './src/components/header';

// Create a component
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// };
const App = () => {
  return (
    <Header headerText={'Albums'}/>
  );
};

// Render component to the device (register component to app registry)
AppRegistry.registerComponent('albums', () => App);
