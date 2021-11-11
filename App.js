import React from 'react';
import { View,} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reduders'
import AddEntry from './components/AddEntry';

const App = () => {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
        <View style={{flex:1}}>
          <AddEntry />
        </View>
    </Provider>
  );
};


export default App;
