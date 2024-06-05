import { StyleSheet, Text, View, Modal, Image } from 'react-native'
import React from 'react'
import Status1 from "../assets/status1.jpeg"
import User1 from "../assets/user1.jpeg"
import { Colors } from '../theme/Colors';
import VectorIcon from './VectorIcon';
import { useNavigation } from '@react-navigation/native';
import ProcessBar from './ProcessBar';

const FullModal = (props) => {
    const navigation = useNavigation();
    const {showStatusModal, setShowStatusModal, item, setTimeUp} = props;
    const updateModalStatus = () => {
        setShowStatusModal(prev => ({...prev, [item.id]: false}) )
    }
  return (
      <Modal  
        visible={showStatusModal}
        animationType='fade'
        onRequestClose={updateModalStatus}> 
            <View style={styles.container}>
                <ProcessBar setTimeUp={setTimeUp} />
                <View style={styles.topContainer}>
                    <View style={styles.profileSetion}>
                        <VectorIcon 
                            name='arrow-back'
                            type='Ionicons'
                            size={24}
                            color={Colors.white}
                            onPress={()=> setShowStatusModal(prev => ({...prev, [item.id]: false}))}
                        />
                        <Image source={item.storyImg} style={styles.profileImg} />
                        <Text style={styles.username}>{item.name}</Text>
                    </View>
                    <VectorIcon 
                        name="dots-three-vertical"
                        type="Entypo"
                        size={18}
                        color={Colors.white}
                    />
                </View>
                
                    <Image source={Status1} style={styles.storyImg} />
                    <Text style={styles.storyMsg}>My Lastest Art</Text>
                <View style={styles.replySection}>
                <VectorIcon 
                        name="chevron-small-up"
                        type="Entypo"
                        size={24}
                        color={Colors.white}
                        onPress={()=> setShowStatusModal(prev => ({...prev, [item.id]: false}))}
                    />
                    <Text style={styles.reply}>Reply</Text>
                </View>
            </View>
      </Modal>
  )
}

export default FullModal

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.primaryColor,
        justifyContent: 'space-between',
       
    },
    storyImg: {
        height: '75%',
        width: '100%'
    },
    storyMsg: {
        fontSize: 17,
        color: Colors.black,
        textAlign: 'center',
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    username: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10,
    },
    topContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileSetion: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reply: {
        fontSize: 15,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: 10
    },
    replySection: {
        alignItems: 'center',
    }
})