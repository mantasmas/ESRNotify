import React from 'react';
import styled from '@emotion/native';
import { FAB, Text } from 'react-native-paper';

import { useAuth } from '../../providers/auth.provider';
import { useNavigation } from '@react-navigation/native';

const Container = styled.SafeAreaView`
  justify-content: center;
  flex-grow: 1;
  margin: 0 16px;
`;

const Floater = styled(FAB)`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export function DashboardScreen() {
  const auth = useAuth();
  const { navigate } = useNavigation();

  return (
    <Container>
      <Text>{auth!.user?.email}</Text>

      <Floater icon="plus" small onPress={() => navigate('NewTrackerScreen')} />
    </Container>
  );
}
