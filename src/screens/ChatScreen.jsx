import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'
import Wallpaper from '../assets/wallpaper.jpeg'

const ChatScreen = () => {
  return (
    <>
      <ChatHeader />
      <ImageBackground 
        source={Wallpaper}  
        style = {styles.wallpaper}
      >
        <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {},
  wallpaper: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 5,
  }
})