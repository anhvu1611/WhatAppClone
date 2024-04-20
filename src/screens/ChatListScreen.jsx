import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ChatList from '../components/ChatList'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList />
        <TouchableOpacity style={styles.contactIcon}>
          <VectorIcon 
            name="message-reply-text"
            type="MaterialCommunityIcons"
            size={22}
            color= {Colors.white}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.background
  },
  contactIcon: {
    backgroundColor: Colors.tertiary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
})