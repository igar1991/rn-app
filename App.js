import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { boot } from './src/boot';
import { AppNavigation, BookedNavigation, AllNavigation  } from './src/navigation/AppNavigation';


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
    <AllNavigation />
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
