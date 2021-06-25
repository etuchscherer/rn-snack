import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_100Thin } from '@expo-google-fonts/raleway';
import { nullUser } from './lib/auth';
import SignInScreen from './screens/SignInScreen';
import AppContext from './components/AppContext';
import RootNavigation from './navigation/root-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ Raleway_100Thin });
  const [isSignedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(nullUser);

  useEffect(() => {
    AsyncStorage.setItem('DEMO_APP::IS_SIGNED_IN_VALUE', `${+isSignedIn}`);
  }, [isSignedIn]);

  useEffect(() => {
    AsyncStorage.setItem('DEMO_APP::CURRENT_USER', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    AsyncStorage.getItem('DEMO_APP::IS_SIGNED_IN_VALUE').then((value) => {
      if (value) {
        setSignedIn(!!+value);
      }
    });

    AsyncStorage.getItem('DEMO_APP::CURRENT_USER').then((value) => {
      if (value) {
        setCurrentUser(JSON.parse(value));
      }
    });
  }, []);

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
        ? <RootNavigation />
        : <SignInScreen />
      }
    </AppContext.Provider>
  )
}

