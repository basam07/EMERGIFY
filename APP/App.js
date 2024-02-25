/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// main page
import HomePage from './Home';
//public pages
import PublicLoginForm from './Public/PublicLogin';
import PublicSignupForm from './Public/PublicSignUp';
import PMain from './Public/PublicMain';
// police pages
import PoliceBeltCheck from './Police/PoliceBelt';
import PoliceLoginForm from './Police/PoliceLogin';
import PoliceSignupForm from './Police/PoliceSignUp';
import Police from './Police/Police';
// fire pages
import FireBeltCheck from './Fire/FireBelt';
import FireLoginForm from './Fire/FireLogin';
import FireSignupForm from './Fire/FireSignUp';
import Fire from './Fire/Fire';
// ambulance pages
import AmbulanceBeltCheck from './Ambulance/AmbulanceBelt';
import AmbulanceLoginForm from './Ambulance/AmbulanceLogin';
import AmbulanceSignupForm from './Ambulance/AmbulanceSignUp';
import Ambulance from './Ambulance/Ambulance';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PublicMain">

        {/* home page */}
        <Stack.Screen name="Home" component={HomePage}/>

        {/* public pages */}
        <Stack.Screen name="PublicLogin" component={PublicLoginForm}/>
        <Stack.Screen name="PublicSignUp" component={PublicSignupForm} />
        <Stack.Screen name="PublicMain" component={PMain} />

        {/* police pages */}
        <Stack.Screen name="PoliceBelt" component={PoliceBeltCheck}/>
        <Stack.Screen name="PoliceLogin" component={PoliceLoginForm}/>
        <Stack.Screen name="PoliceSign Up" component={PoliceSignupForm}/>
        <Stack.Screen name="Police" component={Police}/>

        {/* fire pages */}
        <Stack.Screen name="FireBelt" component={FireBeltCheck}/>
        <Stack.Screen name="FireLogin" component={FireLoginForm}/>
        <Stack.Screen name="FireSignUp" component={FireSignupForm}/>
        <Stack.Screen name="Fire" component={Fire}/>
        
        {/* ambulance pages */}
        <Stack.Screen name="AmbulanceBelt" component={AmbulanceBeltCheck}/>
        <Stack.Screen name="AmbulanceLogin" component={AmbulanceLoginForm}/>
        <Stack.Screen name="AmbulanceSignUp" component={AmbulanceSignupForm}/>
        <Stack.Screen name="Ambulance" component={Ambulance}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;