import * as React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import AppContext from '../components/AppContext';
import { nullUser } from '../lib/auth';

export default function ProfileScreen(): JSX.Element {
  const { setSignedIn, setCurrentUser } = useContext(AppContext);
  const logout = () => {
    setSignedIn(false);
    setCurrentUser(nullUser);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is the profile screen</Text>
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonStyle}
        onPress={logout}
        title="Logout"
      />
    </View>
  )
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
  buttonContainer: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 80
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: 'white',
    borderWidth: 1
  }
});