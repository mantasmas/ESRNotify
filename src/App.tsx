import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as PaperProvider } from 'react-native-paper';
import { Navigation } from './Navigation';
import { ProvideAuth } from './providers/auth.provider';

const queryClient = new QueryClient();

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <ProvideAuth>
          <Navigation />
        </ProvideAuth>
      </PaperProvider>
    </QueryClientProvider>
  );
}
