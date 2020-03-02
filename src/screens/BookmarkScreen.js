import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Post } from '../components/post';
import { useSelector } from 'react-redux';

export const BookmarkScreen = ({ navigation })=> {

  const openPost =(post)=> {
    navigation.navigate('PostScreen', {
      itemId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  const allBooked = useSelector(state=>state.post.bookedPost)
    return (
    <View style={styles.container}>
      <FlatList data = {allBooked} keyExtractor={post=>post.id.toString()} renderItem = {({item})=><Post post = {item} openPost={openPost} />}/>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
    
    }
    
  });