import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';

const ChatFooter = () => {
  const [message, setMessage] = useState('');
  const [sendEnable, setSendEnable] = useState(false);

  const onChange = value => {
    setMessage(value);
    setSendEnable(true);
  };
  const onSend = () => {
    setMessage('');
    setSendEnable(false);
    Alert.alert('Message', message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.row}>
          <VectorIcon
            name="emoji-emotions"
            type="MaterialIcons"
            size={20}
            color={Colors.white}
          />
          <TextInput
            placeholder="Message"
            style={styles.textInput}
            placeholderTextColor={Colors.textGrey}
            onChangeText={value => onChange(value)}
            value={message}
          />
        </View>
        <View style={styles.row}>

            {
                !sendEnable && (
                    <>
                <VectorIcon
                    name="camera"
                    type="Entypo"
                    size={20}
                    color={Colors.white}
                />
                <VectorIcon
                    name="rupee"
                    type="FontAwesome"
                    size={20}
                    color={Colors.white}
                    style={styles.iconStyle}
                />
            </>
                )
            }
          
          <VectorIcon
                    name="attachment"
                    type="Entypo"
                    size={20}
                    color={Colors.white}
                />
        </View>
      </View>
      <View style={styles.rightContainer}>
        {sendEnable ? (
            <VectorIcon 
                name="send" 
                type="FontAwesome" 
                size={20} 
                color={Colors.white} 
                onPress={onSend}
            />
        ):(
            <VectorIcon 
                name="mic" 
                type="Entypo" 
                size={20} 
                color={Colors.white} 
            />
        )}
        
        
      </View>
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: 150,
    fontSize: 17,
    color: Colors.white,
    marginLeft: 5
  },
  leftContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  rightContainer: {
    backgroundColor: Colors.teal,
    borderRadius: 50,
    padding: 10,
  },
  iconStyle: {
    marginHorizontal: 25,
  },
});
