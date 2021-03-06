import React from 'react';
import { View,} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reduders'
import AddEntry from './components/AddEntry';
import History from './components/History'

const App = () => {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
        <View style={{flex:1}}>
          <AddEntry />
          <History />
        </View>
    </Provider>
  );
};


export default App;
