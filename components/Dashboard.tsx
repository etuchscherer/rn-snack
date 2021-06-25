import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useContext } from 'react';
import { Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import AppContext from '../components/AppContext';

export default function Dashboard(): JSX.Element {
  const navigation = useNavigation();
  const { currentUser } = useContext(AppContext);

  return (<SafeAreaProvider style={styles.container}>
    <Avatar rounded
      containerStyle={ styles.avatar }
      size="xlarge"
      source={{
        uri: currentUser.avatar
      }}
    />
    <Text style={styles.center}>Welcome, { currentUser.firstName } { currentUser.lastName }!</Text>
    <Button
      title="Go to Profile page"
      onPress={() => navigation.navigate('Profile')}
    />
  </SafeAreaProvider>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009bd3"
  },
  center: {
    textAlign: 'center',
    margin: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  avatar: {
    marginTop: 140,
    alignSelf: 'center'
  }
});