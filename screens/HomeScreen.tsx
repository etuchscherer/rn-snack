import * as React from 'react';
import Dashboard from '../components/Dashboard';
import { UserModel } from '../types/index';

export default function HomeScreen({ currentUser }: { currentUser: UserModel }): JSX.Element {

  return (<Dashboard currentUser={currentUser} />)
}