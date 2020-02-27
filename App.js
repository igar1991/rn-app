import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { boot } from './src/boot';
import { AppNavigation } from './src/navigation/AppNavigation';


export default function App() {
  const [ready, setReady] = useState(false);


  if(!ready) {
    return <AppLoading
    startAsync={boot}
    onError={console.log('222')}
    onFinish={()=> setReady(true)}
     />
  }

  return (
    <AppNavigation />
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
