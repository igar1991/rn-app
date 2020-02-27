import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DATA} from '../data';
import { Post } from '../components/post';

export const MainScreen = ({ navigation })=> {

  const openPost =(post)=> {
    navigation.navigate('PostScreen', {
      itemId: post.id,
      date: post.date
    })



  }
    return (
    <View style={styles.container}>
      <FlatList data = {DATA} keyExtractor={post=>post.id.toString()} renderItem = {({item})=><Post post = {item} openPost={openPost} />}/>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
    
    }
    
  });