import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tabNavigation from './tabNavigation';
import { DetailsScreen } from './screens';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Root'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Root' component={tabNavigation} />
      <Stack.Screen name='Details' component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
