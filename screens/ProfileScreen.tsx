import * as React from 'react';
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import AppContext from '../components/AppContext';
import { nullUser } from '../lib/auth';

export default function ProfileScreen(): JSX.Element {
  const { setSignedIn, setCurrentUser } = useContext(AppContext);
  const logout = () => {
    setSignedIn(false);
    setCurrentUser(nullUser);
  }

  return (
    <View>
      <Text>This is the profile screen</Text>
      <Button onPress={logout} title="Logout" />
    </View>
  )
}