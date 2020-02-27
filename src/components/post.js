import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Post = ({post,openPost})=> {
    return (
        <TouchableOpacity onPress={()=>openPost(post)}>
        <View style={styles.container}>
            <ImageBackground source={{uri:post.img}} style={styles.image}>
              <View style={styles.text}>
                <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
              </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        overflow: 'hidden'

    },
    image: {
        width: '100%',
        height: 200
    },
    text: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: '#fff',
        fontFamily: 'open-bold'
    }
})