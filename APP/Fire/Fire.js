import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Fire = ({}) => {
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Requests</Text>
        </View>
        <ScrollView style={styles.list}>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.view}>
            <Image
              source={require('../../images/alert-icon.png')}
              style={styles.icon}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.detail}>Time Detail</Text>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    padding: 10,
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 7,
    marginLeft: 11,
    color: 'white',
  },
  list: {
    padding: 10,
  },
  view: {
    marginBottom: 4,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    elevation: 5,
  },

  icon: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  text: {
    margin: 3,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  detail: {
    fontSize: 15,
    fontWeight:'bold',
  },
});

export default Fire;
