import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Post } from '../components/post';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../redux/actions/postAction';

export const MainScreen = ({ navigation })=> {

  const openPost =(post)=> {
    navigation.navigate('PostScreen', {
      itemId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(postAction())

  },[dispatch])

  const allPosts = useSelector(state=> state.post.allPost)
    return (
    <View style={styles.container}>
      <FlatList data = {allPosts} keyExtractor={post=>post.id.toString()} renderItem = {({item})=><Post post = {item} openPost={openPost} />}/>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
    
    }
    
  });