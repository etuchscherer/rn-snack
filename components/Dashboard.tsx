import { SafeAreaProvider } from "react-native-safe-area-context";
import * as React from 'react';
import { UserModel } from "../types/index";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

export default function Dashboard({ currentUser }: { currentUser: UserModel}) {
  return (<SafeAreaProvider style={styles.container}>
    <Avatar rounded
      containerStyle={ styles.avatar }
      size="xlarge"
      source={{
        uri: currentUser.avatar
      }}
    />
    <Text style={styles.center}>Welcome, { currentUser.firstName } { currentUser.lastName }!</Text>
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