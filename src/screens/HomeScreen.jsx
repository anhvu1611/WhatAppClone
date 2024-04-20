import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TopTabbar from '../navigation/TopTabbar'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <TopTabbar />
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})