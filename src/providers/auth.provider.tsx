import React, { useState, useEffect, useContext, createContext } from 'react';
import { FirebaseAuthTypes, firebase } from '@react-native-firebase/auth';

const authContext = createContext<{
  user: FirebaseAuthTypes.User | null;
  signin: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.User | null>;
  signup: (
    email: string,
    password: string,
  ) => Promise<FirebaseAuthTypes.User | null>;
  signout: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<boolean>;
  confirmPasswordReset: (code: string, password: string) => Promise<boolean>;
  getBearer: () => Promise<string | null>;
  isSignedIn: () => boolean;
} | null>(null);

export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  const { Provider } = authContext;

  return <Provider value={auth}>{children}</Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const signin = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signup = (email: string, password: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  const sendPasswordResetEmail = (email: string) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code: string, password: string) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(stateChangedUser => {
      if (stateChangedUser) {
        setUser(stateChangedUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const getBearer = async () => {
    if (user) {
      return `Bearer ${await user.getIdToken()}`;
    } else {
      return null;
    }
  };

  const isSignedIn = () => {
    return !!user;
  };

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    getBearer,
    isSignedIn,
  };
}
