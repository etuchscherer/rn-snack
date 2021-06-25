import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_100Thin } from '@expo-google-fonts/raleway';
import { nullUser } from './lib/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';
import AppContext from './components/AppContext';

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ Raleway_100Thin });
  const [isSignedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(nullUser);

  const appContextSettings = {
    isSignedIn,
    setSignedIn,
    currentUser,
    setCurrentUser
  };

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AppContext.Provider value={appContextSettings}>
      {isSignedIn
       ? <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home">
              {() => <HomeScreen currentUser={currentUser} />}
            </Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
       : <SignInScreen />
      }
    </AppContext.Provider>
  )
}
