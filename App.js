import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './Navigation/routes';

export default function App() {
  return (
    <NavigationContainer >
      <Route/>
    </NavigationContainer>
  );
}


