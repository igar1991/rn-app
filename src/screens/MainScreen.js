import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MainScreen = ({})=> {
    return (
    <View style={styles.container}>
      <Text>Open up11111</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 40
    }
  });