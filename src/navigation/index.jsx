import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, DetailsScreen } from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Details'} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
