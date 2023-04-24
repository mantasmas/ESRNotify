import React from 'react';
import styled from '@emotion/native';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextInput, HelperText } from 'react-native-paper';

import { Spacer } from '../../../components';
import { useAuth } from '../../../providers/auth.provider';

const Container = styled.SafeAreaView`
  justify-content: center;
  flex-grow: 1;
  margin: 0 16px;
`;

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const auth = useAuth();

  const onSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return auth!.signin(username, password);
  };

  return (
    <Container>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Your username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && (
        <HelperText type="error">This is required.</HelperText>
      )}

      <Spacer height={16} />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            textContentType="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && (
        <HelperText type="error">This is required.</HelperText>
      )}
      <Spacer height={16} />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </Container>
  );
}
