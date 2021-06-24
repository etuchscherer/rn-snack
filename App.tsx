import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_100Thin } from '@expo-google-fonts/raleway';
import { isValidUser, findUser, nullUser } from './lib/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({ Raleway_100Thin });
  const [isSignedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(nullUser);

  const _authenticate = function(email: string, password: string): void {
    const user = findUser(email, password);
    if (isValidUser(user)) {
      setSignedIn(true);
      setCurrentUser(user);
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  if (isSignedIn) {
    return (<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => <HomeScreen currentUser={currentUser} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>)
  } else {
    return (<SignInScreen onSignIn={_authenticate} />)
  }

}
