import { Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

export default function SignInScreen({ onSignIn }: { onSignIn: CallableFunction }): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  function _authenticate() {
    onSignIn(email, password);
    // navigation.push('Home');
  }

  return (<SafeAreaProvider style={styles.container}>
    <Text style={styles.heading}>Please Sign In</Text>
    <TextInput style={styles.email} placeholder="email address" keyboardType="email-address" onChangeText={setEmail}></TextInput>
    <TextInput style={styles.password} secureTextEntry={true} placeholder="password" autoCompleteType="password" textContentType="password" onChangeText={setPassword}></TextInput>
    <Button title="Sign In" type="solid" containerStyle={styles.signInButtonContainer} buttonStyle={styles.buttonStyle} onPress={_authenticate} />
    <Button title="Register" type="solid" containerStyle={styles.registerButtonContainer} buttonStyle={styles.buttonStyle} onPress={() => alert('register')} />
    </SafeAreaProvider>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009bd3"
  },
  heading: {
    textAlign: 'center',
    margin: 50,
    marginTop: 80,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
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
  buttonStyle: {
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1
  }
});