import React from 'react';
import { PermissionsAndroid } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as PaperProvider } from 'react-native-paper';
import { Navigation } from './Navigation';
import { ProvideAuth } from './providers/auth.provider';
import { NotificationContainer } from './providers/notification.provider';

const queryClient = new QueryClient();

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export function App() {
  return (
    <>
      <ProvideAuth>
        <QueryClientProvider client={queryClient}>
          <PaperProvider>
            <Navigation />
          </PaperProvider>
          <NotificationContainer />
        </QueryClientProvider>
      </ProvideAuth>
    </>
  );
}
