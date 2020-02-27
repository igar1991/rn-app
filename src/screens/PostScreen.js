import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { DATA } from '../data';

export const PostScreen = ({route})=> {
  const {itemId} = route.params
  const post = DATA.find(p=>p.id===itemId)
  console.log(post)
    return (
    <View>
      <Image source={{uri:post.img}} style={styles.img} />
      <View style={styles.text}>
        <Text >
          {post.text}
        </Text>
      </View>
      <Button title='Удалить' onPress={()=>console.log('111')} />
    
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