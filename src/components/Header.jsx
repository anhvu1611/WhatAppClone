import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WhatappLogo from '../assets/whatsapp-logo.png'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcon'

const Header = () => {
  return (
    <View style={styles.container} >
      <Image  source={WhatappLogo} style={styles.LogoStyle}/>
      <View style={styles.headerIcons}>
        <VectorIcon 
          type="Feather" 
          name="camera" 
          size={20} 
          color={Colors.secondaryColor} 
        />
        <VectorIcon 
          type="Ionicons" 
          name="search" 
          size={20} 
          color={Colors.secondaryColor} 
          style={styles.iconStyle}
        />
        <VectorIcon 
          type="Entypo" 
          name="dots-three-vertical" 
          size={20} 
          color={Colors.secondaryColor} 
        />
      </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
    padding: 16,
    justifyContent: 'space-between',
  },
  LogoStyle: {
    height: 25,
    width: 110
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginHorizontal: 25
  }
})