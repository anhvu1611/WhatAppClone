import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallLink from '../components/CallLink'
import RecentCalls from '../components/RecentCalls'
import { Colors } from '../theme/Colors'

const CallListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CallLink />
      <RecentCalls />
    </ScrollView>
  )
}

export default CallListScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16
  }
})