import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AboutScreen = ({})=> {
    return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
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