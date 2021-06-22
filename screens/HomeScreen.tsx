import * as React from 'react';
import Dashboard from '../components/Dashboard';

export default function HomeScreen({ navigation, currentUser }): JSX.Element {

  return (<Dashboard currentUser={currentUser} navigation={navigation} />)
}