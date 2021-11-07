import React from 'react';
import { Text, View,} from 'react-native';
import AddEntry from './components/AddEntry';

const App = () => {
  return (
    <View>
      <AddEntry />
      <Text>Just Edited</Text>
      <Text>Wow</Text>
    </View>
  );
};


export default App;
