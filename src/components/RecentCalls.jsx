import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import User1 from '../assets/user1.jpeg';
import VectorIcon from '../utils/VectorIcon';
import {RecentCallsData} from '../data/RecentCallsData';

const RecentCalls = () => {
  return (
    <>
      <Text style={styles.recent}>Recent</Text>
      {RecentCallsData.map((item) => (
        <View style={styles.container} key={item.id}>
          <View style={styles.row}>
            <Image source={item.profileImg} style={styles.imgStyle} />
            <View style={styles.linkSection}>
              <Text style={styles.callLink}>{item.name}</Text>
              <View style={styles.callDetail}>
                {item.incoming && (
                  <VectorIcon
                    name="arrow-down-left"
                    type="Feather"
                    size={20}
                    color={Colors.red}
                  />
                )}
                {item.outgoing && (
                  <VectorIcon
                    name="arrow-up-right"
                    type="Feather"
                    size={20}
                    color={Colors.tertiary}
                  />
                )}
                <Text style={styles.shareLink}>{item.time}</Text>
              </View>
            </View>
          </View>
          {item.video && (
            <VectorIcon
              name="videocam"
              type="Ionicons"
              size={24}
              color={Colors.tertiary}
            />
          )}
          {item.audio && (
            <VectorIcon
              name="phone-alt"
              type="FontAwesome5"
              size={16}
              color={Colors.tertiary}
            />
          )}
        </View>
      ))}
    </>
  );
};

export default RecentCalls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  recent: {
    color: Colors.textGrey,
    fontSize: 14,
    marginTop: 20,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
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
  },
});
