import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { DATA } from '../data';
import { useDispatch } from 'react-redux';
import { tooggleHandler } from '../redux/actions/postAction';

export const PostScreen = ({route, navigation})=> {
  const { itemId } = route.params
  const post = DATA.find(p=>p.id===itemId)

  const dispatch = useDispatch()


  useEffect(()=> {
    navigation.setParams({tooggle: dispatch(tooggleHandler(itemId))})
  },[])
    return (
    <View>
      <Image source={{uri:post.img}} style={styles.img} />
      <View style={styles.text}>
        <Text >
          {post.text}
        </Text>
      </View>
      <Button title='Удалить' onPress={()=>navigation.setParams({rrrr: 1})} />
      <Button title='Удалить' onPress={()=>console.log(route)} />
    
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