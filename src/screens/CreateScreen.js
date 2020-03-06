import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions/postAction';

const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

export const CreateScreen = ({ navigation })=> {
  const [text, setText] = useState('')
  const dispatch=useDispatch()

  const newPost=()=> {
    const post = {
      id: Date.now().toString(),
      img: img,
      text: text,
      date: new Date().toJSON(),
      booked: false
    }
    dispatch(addPost(post))
    navigation.goBack()
  }
    return (
        <ScrollView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text>Создай свой пост</Text>
            <TextInput value={text} onChangeText={setText} style={styles.input} />
            <Image style = {styles.img} source = {{uri: img}} />
            <Button title = 'Добавить' onPress={newPost} />
           </View>
           </TouchableWithoutFeedback>
        </ScrollView>
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
    },
    input: {
      width: '100%',
      borderBottomWidth: 3,
    },
    img: {
      width: '100%',
      height: 200
    }
  });