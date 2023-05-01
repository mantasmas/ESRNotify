import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from './features/auth';
import { useAuth } from './providers/auth.provider';
import { DashboardScreen } from './features/dashboard';
import { SettingsScreen } from './features/settings';
import { NewTrackerScreen } from './features/tracker';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

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
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="NewTrackerScreen" component={NewTrackerScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
