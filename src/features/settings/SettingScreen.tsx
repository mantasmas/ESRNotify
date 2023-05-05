import React from 'react';
import styled from '@emotion/native';
import { Button, Text } from 'react-native-paper';
import { useAuth } from '../../providers/auth.provider';

const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* justify-content: center; */
  flex-grow: 1;
  margin: 16px 16px;
`;

const ContainerSpaced = styled(Container)`
  justify-content: space-between;
`;

export const SettingsScreen = () => {
  const ctx = useAuth();

  if (!ctx) {
    return <></>;
  }

  const logout = ctx.signout;

  return (
    <ContainerSpaced>
      <Container>
        <Text>Settings</Text>
        <Text>Settings</Text>
        <Text>Settings</Text>
      </Container>
      <Button textColor="red" onPress={logout}>
        Logout
      </Button>
    </ContainerSpaced>
  );
};
