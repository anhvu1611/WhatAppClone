import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '../assets/user1.jpeg'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'
import { useNavigation } from '@react-navigation/native'


const ChatHeader = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <VectorIcon
                name="arrow-back"
                type="Ionicons"
                size={24}
                color= {Colors.white}
                onPress={() => navigation.goBack()}
            />
            <Image source={Profile} style={styles.profilePhoto}/>
            <Text style={styles.username}>Lisa</Text>
            
        </View>
        <View style={styles.rightContainer}>
            <VectorIcon
                name="videocam"
                type="Ionicons"
                size={20}
                color= {Colors.white}
                style={{marginRight: 20}}
            />
            <VectorIcon
                name="phone"
                type="Fontisto"
                size={16}
                color= {Colors.white}
                style={{marginRight: 16}}
            />
            <VectorIcon
                name="dots-three-vertical"
                type="Entypo"
                size={18}
                color= {Colors.white}
            />
        </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    profilePhoto: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginLeft: 10
    },
    username: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: 'bold',
        marginLeft: 10
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})