import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

const CallLink = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBg}>
        <VectorIcon
          name="link"
          type="Fontisto"
          size={20}
          color={Colors.white}
        />
      </View>
      <View style={styles.linkSection}>
        <Text style={styles.callLink}>Create call Link</Text>
        <Text style={styles.shareLink}>Share a link for your Whatapp call</Text>
      </View>
    </View>
  )
}

export default CallLink

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
  },
  iconBg: {
    backgroundColor: Colors.tertiary  ,
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkSection: {
    marginLeft: 15,
  },
  callLink: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
  shareLink: {
    color: Colors.textGrey,
    fontSize: 13,
    marginTop: 3,
  }
})