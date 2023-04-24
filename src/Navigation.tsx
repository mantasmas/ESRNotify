import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './features/auth';
import { useAuth } from './providers/auth.provider';
import { DashboardScreen } from './features/dashboard';

const Stack = createNativeStackNavigator();

export function Navigation() {
  const ctx = useAuth();

  if (!ctx) {
    return <></>;
  }

  const { user } = ctx;

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
