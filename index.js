// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// };
const App = () => ( <Text>some Text</Text> );

// Render component to the device (register component to app registry)
AppRegistry.registerComponent('albums', () => App);
