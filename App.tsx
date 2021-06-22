import 'react-native-gesture-handler';
import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';
import AppLoading from 'expo-app-loading';
import { useFonts, Raleway_100Thin } from '@expo-google-fonts/raleway';
import { isValidUser, findUser, nullUser } from './lib/auth';
import Dashboard from './components/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({ Raleway_100Thin });
  const [isSignedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(nullUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _authenticate = function() {
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
    return (<Dashboard currentUser={currentUser} />)
  } else {
    return (<SafeAreaProvider style={styles.container}>
      <Text style={styles.center}>Please Sign In</Text>
      <TextInput style={styles.email} placeholder="email address" keyboardType="email-address" onChangeText={setEmail}></TextInput>
      <TextInput style={styles.password} secureTextEntry={true} placeholder="password" autoCompleteType="password" textContentType="password" onChangeText={setPassword}></TextInput>
      <Button title="Sign In" type="solid" containerStyle={styles.signInButtonContainer} buttonStyle={styles.buttonStyle} onPress={_authenticate} />
      <Button title="Register" type="solid" containerStyle={styles.registerButtonContainer} buttonStyle={styles.buttonStyle} onPress={() => alert('register')} />
    </SafeAreaProvider>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009bd3"
  },
  center: {
    textAlign: 'center',
    margin: 50,
    marginTop: 80,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  email: {
    marginTop: 50,
    backgroundColor: '#FFF',
    color: '#000',
    width: '80%',
    padding: 4,
    alignSelf: 'center'
  },
  password: {
    marginTop: 20,
    backgroundColor: '#FFF',
    color: '#000',
    width: '80%',
    padding: 4,
    alignSelf: 'center'
  },
  signInButtonContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 80
  },
  registerButtonContainer: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center'
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1
  }
})