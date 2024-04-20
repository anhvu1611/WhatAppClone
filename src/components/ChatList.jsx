import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import User1 from "../assets/user1.jpeg"
import {Colors} from "../theme/Colors"
import VectorIcon from '../utils/VectorIcon'
import { ChatListData } from '../data/ChatListData'
import { useNavigation } from '@react-navigation/native'
import ChatScreen from '../screens/ChatScreen'

const ChatList = () => {
    const navigation = useNavigation();
    const onNavigate = () => {
        navigation.navigate('ChatScreen')
    }

  return (
    <>
        {ChatListData.map( item => (
            <View key={item.id}>
                <TouchableOpacity onPress={onNavigate} style={styles.container}>
                    <View style={styles.leftContainer}>
                        <Image source={item.profile} style={styles.profileImg} />
                        <View>
                            <Text style={styles.username}>{item.name}</Text>
                            <Text style={styles.message}>{item.message}</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.timeStamp}>{item.time}</Text>
                        {item.mute && (
                            <VectorIcon 
                                type="MaterialCommunityIcons"
                                name="volume-variant-off"
                                size={22}
                                color={Colors.textGrey}
                                style={styles.muteIcon}
                            />
                        )}
                        
                    </View>
                </TouchableOpacity>
            </View>
        ))}
        
    </>
  )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileImg: {
        borderRadius: 50,
        width: 40,
        height: 40,
        marginRight: 15
    },
    username: {
        color: Colors.secondaryColor,
        fontSize: 16,
    },
    message: {
        color: Colors.textGrey,
        fontSize: 14,
        marginTop: 5,
    },
    leftContainer: {
        flexDirection: 'row',

    },
    timeStamp: {
        color: Colors.textGrey,
        fontSize: 14,
    },
    rightContainer: {

    },
    muteIcon: {
        marginLeft: 20,
        marginTop: 5
    }
})