import React, { useState } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import { useAuth } from './auth.provider';
import { useFetch } from './http.provider';

type DeviceToken = {
  token: string | null;
  setNew: (by: string) => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useDeviceToken = create<DeviceToken>()(
  persist(
    (set, get) => ({
      token: null,
      _hasHydrated: false,
      setHasHydrated: state => {
        set({
          _hasHydrated: state,
        });
      },
      setNew: (by: string) =>
        set(state => {
          if (get().token === by) {
            return state;
          }

          return { token: by };
        }),
    }),
    {
      name: 'DeviceTokenStorage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state: DeviceToken) => ({ token: state.token }),
      onRehydrateStorage: (state: DeviceToken) => {
        state.setHasHydrated(true);
      },
    },
  ),
);

const useHydration = () => {
  const [hydrated, setHydrated] = useState(useDeviceToken.persist.hasHydrated);

  useEffect(() => {
    // Note: This is just in case you want to take into account manual rehydration.
    // You can remove the following line if you don't need it.
    const unsubHydrate = useDeviceToken.persist.onHydrate(() =>
      setHydrated(false),
    );

    const unsubFinishHydration = useDeviceToken.persist.onFinishHydration(() =>
      setHydrated(true),
    );

    setHydrated(useDeviceToken.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};

const isNotificationsAvailable = async () => {
  const permissions = await firebase.messaging().hasPermission();
  const support = await firebase.messaging().isSupported();

  return (
    support && permissions === firebase.messaging.AuthorizationStatus.AUTHORIZED
  );
};

export const NotificationContainer = () => {
  const ctx = useAuth();
  const state = useHydration();

  if (state && !!ctx?.user) {
    return <Notifications />;
  }

  return <></>;
};

export const Notifications = () => {
  const setToken = useDeviceToken(state => state.setNew);
  const token = useDeviceToken(state => state.token);
  const f = useFetch();

  useEffect(() => {
    const fn = async () => {
      if (await isNotificationsAvailable()) {
        if (!firebase.messaging().isDeviceRegisteredForRemoteMessages) {
          await firebase.messaging().registerDeviceForRemoteMessages();
        }
        firebase.messaging().onTokenRefresh(setToken);
        setToken(await firebase.messaging().getToken());
      }
    };

    fn().catch(console.error);
  });

  useEffect(() => {
    const fn = async () => {
      return f('/device', {
        method: 'POST',
        body: { token: token },
      });
    };

    if (token) {
      console.log('Device token registration: ' + token);
      fn().then(console.log).catch(console.error);
    }
  }, [token, f]);

  return <></>;
};
