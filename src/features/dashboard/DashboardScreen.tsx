import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native-paper';

import { useAuth } from '../../providers/auth.provider';

const Container = styled.SafeAreaView`
  justify-content: center;
  flex-grow: 1;
  margin: 0 16px;
`;

export function DashboardScreen() {
  const auth = useAuth();

  return (
    <Container>
      <Text>{auth!.user?.email}</Text>
    </Container>
  );
}
