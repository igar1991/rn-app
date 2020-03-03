import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { DATA } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { tooggleHandler, removePost } from '../redux/actions/postAction';

export const PostScreen = ({route, navigation})=> {
  const { itemId } = route.params
  const post = useSelector(state=>state.post.allPost.find(p=>p.id===itemId))

  const dispatch = useDispatch()

  const toogleHandler =useCallback(()=> {
    dispatch(tooggleHandler(itemId))
  },[dispatch,itemId])
  const booked = useSelector(state=> state.post.bookedPost.some(item=>item.id===itemId))

  useEffect(()=> {
    navigation.setParams({toogleHandler})
    navigation.setParams({booked})

  },[toogleHandler,booked])

  if(!post) {
    return null
  }
    return (
    <View>
      <Image source={{uri:post.img}} style={styles.img} />
      <View style={styles.text}>
        <Text >
          {post.text}
        </Text>
      </View>
      <Button title='Удалить' onPress={()=> {
        navigation.navigate('Main')
        dispatch(removePost(itemId))
      }} />
    
    </View>
    )
}

const styles = StyleSheet.create({
    img: {
      width: '100%',
      height: 200
    },
    text: {
      paddingVertical: 5,
      alignItems: 'center',
      width: '100%'
  }
  });