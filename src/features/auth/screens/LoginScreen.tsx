import styled from '@emotion/native';
import React from 'react';

import { Button, TextInput } from 'react-native-paper';
import { Spacer } from '../../../components';

const Container = styled.SafeAreaView`
  justify-content: center;
  flex-grow: 1;
  margin: 0 16px;
`;

export function LoginScreen() {
  const [text, setText] = React.useState('');

  return (
    <Container>
      <TextInput
        label="Username"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Spacer height={16} />
      <TextInput
        label="Password"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Spacer height={16} />
      <Button mode="contained">Login</Button>
    </Container>
  );
}
