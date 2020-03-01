import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { boot } from './src/boot';
import {Provider} from 'react-redux';
import { AppNavigation, BookedNavigation, AllNavigation, Drowwer  } from './src/navigation/AppNavigation';
import store from './src/redux/index'


export default function App() {
  const [ready, setReady] = useState(false);
  console.log(BookedNavigation)


  if(!ready) {
    return <AppLoading
    startAsync={boot}
    onError={console.log('222')}
    onFinish={()=> setReady(true)}
     />
  }

  return (
    <Provider store={store}>
    <Drowwer />
    </Provider>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
