import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_100Thin } from '@expo-google-fonts/raleway';
import { nullUser } from './lib/auth';
import SignInScreen from './screens/SignInScreen';
import AppContext from './components/AppContext';
import RootNavigation from './navigation/root-navigation';

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
        ? <RootNavigation />
        : <SignInScreen />
      }
    </AppContext.Provider>
  )
}
