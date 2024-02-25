import * as React from 'react';
import {useEffect, useState} from 'react';
// import {Animated} from 'react-native-reanimated';
// import { View } from '@motify/components';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PMain = () => {
  const handleClick = () => {
    console.log('SOS Clicked!');
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../images/logo.jpg')} style={styles.image} />
      </View>

      <TouchableOpacity style={styles.center} onPress={handleClick}>
        <View style={styles.dot}>
          {[...Array(3).keys()].map(index => {
            return (
              <MotiView
                from={{opacity: 0.5, scale: 0}}
                animate={{opacity: 0, scale: 3}}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  repeatReverse: false,
                  loop: true,
                }}
                key={index}
                style={[styles.dot, StyleSheet.absoluteFillObject]}
              />
            );
          })}
          <Text style={styles.btnText}>SOS</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text>more details</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  dot: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#d20000',
    
    justifyContent: 'center',
    alignItems: 'center',

  },
  center: {
    margin: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 270,
    marginTop: -30,
  },
  btnText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PMain;
