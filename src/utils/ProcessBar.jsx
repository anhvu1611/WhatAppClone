import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Colors } from '../theme/Colors'

const ProcessBar = ({setTimeUp}) => {
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const animateProgess = () => {
        Animated.timing(progressAnimation, {
            toValue: 100,
            duration: 10000,
            useNativeDriver: false
        }).start(({finished}) => {
            if(finished){
                setTimeUp()
                console.log('Animation stopped and progress is full')
            }
        })
    }

    useEffect(() => {
        animateProgess();
    }, []);

  return (
    <View style={styles.container}>
        <View style={styles.progressBg}>
            <Animated.View
                    style={[
                        styles.progress,
                        {
                            width: progressAnimation.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%']
                            })
                        }
                    ]}
            />
        </View>
    </View>
  )
}

export default ProcessBar

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    progressBg: {
      width: '100%',
      height: 5,
      backgroundColor: Colors.textGrey,
      borderRadius: 5
    },
    progress: {
        width: '100%',
        height: 5,
        backgroundColor: Colors.white,
        borderRadius: 5
    },
   
})