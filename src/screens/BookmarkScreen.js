import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BookmarkScreen = ({})=> {
    return (
    <View style={styles.container}>
      <Text>Open up</Text>
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