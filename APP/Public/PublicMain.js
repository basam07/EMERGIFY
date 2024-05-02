import * as React from 'react';
import {useEffect, useState} from 'react';
import {MotiView, ScrollView} from 'moti';
import {Easing} from 'react-native-reanimated';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity, 
  View,
} from 'react-native';

const PMain = ({navigation}) => {
  const handleFetchAndSaveData = async () => {
    try {
      const currentUser = auth().currentUser;
      if (!currentUser) {
        console.log('No user is currently logged in');
        return;
      } 

      // Fetch data from policeUsers collection for the current user
      const userId = currentUser.uid;
      // console.log('@@@ user id', userId);
      const userDoc = await firestore().collection('publicUsers').doc(userId).get();
      const userData = userDoc.data();

      if (!userData) {
        console.log('User data not found in Public Users collection');
        return;
      }

      // Save fetched data to the requests collection
      await firestore().collection('policerequests').doc(userId).set(userData);
      await firestore().collection('firerequests').doc(userId).set(userData);
      await firestore().collection('ambulancerequests').doc(userId).set(userData);
      navigation.navigate('camera');
      console.log('Data fetched and saved successfully:', userData);
    } catch (error) {
      console.error('Error fetching and saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <Image source={require('../../images/logo.jpg')} style={styles.image} />
      </View>

      <TouchableOpacity style={styles.center} onPress={handleFetchAndSaveData}>
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
        <Text style = {styles.note}>
          Note: {'\n'}
          Your safety is our priority, tap to notify. {'\n'}
          The app automatically shares your location with emergency. {'\n'}
          Quick access to emergency departments during critical situations."
          </Text>
      </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
    alignSelf: 'center',
  },
  btnText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  note: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: "20%",
    margin: 10,
    flex: 1,

  },
});

export default PMain;
