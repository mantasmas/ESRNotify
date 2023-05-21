import React from 'react';
import { Pressable } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { usePresenter } from './usePresenter';
import { Spacer } from '../../../components';
import styled from '@emotion/native';

const Container = styled.View`
  flex-grow: 1;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
`;

export const NewTrackerScreen = () => {
  const {
    onSelectMunicipality,
    selectedMunicipality,
    onSelectInstitution,
    selectedInstitution,
    onSelectSpecialist,
    selectedSpecialist,
    selectedProfession,
    selectedService,
    onSelectProfession,
    onSelectService,
  } = usePresenter();

  return (
    <Container>
      <Spacer height={16} />
      <Pressable onPress={onSelectMunicipality}>
        <TextInput
          label="Municipality"
          right={<TextInput.Icon icon="menu-down" />}
          onPressIn={onSelectMunicipality}
          value={selectedMunicipality?.pavadinimas}
          pointerEvents="none"
        />
      </Pressable>
      <Spacer height={16} />
      <Pressable onPress={onSelectInstitution}>
        <TextInput
          label="Institution"
          right={<TextInput.Icon icon="menu-down" />}
          onPressIn={() => {}}
          value={selectedInstitution?.istgPavadinimas}
          pointerEvents="none"
        />
      </Pressable>
      <Spacer height={16} />
      <Pressable onPress={onSelectSpecialist}>
        <TextInput
          label="Specialist"
          right={<TextInput.Icon icon="menu-down" />}
          onPressIn={() => {}}
          value={selectedSpecialist?.fullName}
          pointerEvents="none"
        />
      </Pressable>
      <Spacer height={16} />
      <Pressable onPress={onSelectProfession}>
        <TextInput
          label="Profession"
          right={<TextInput.Icon icon="menu-down" />}
          onPressIn={() => {}}
          value={selectedProfession?.name}
          pointerEvents="none"
        />
      </Pressable>
      <Spacer height={16} />
      <Pressable onPress={onSelectService}>
        <TextInput
          label="Service"
          right={<TextInput.Icon icon="menu-down" />}
          onPressIn={() => {}}
          value={selectedService?.name}
          pointerEvents="none"
        />
      </Pressable>
      <ButtonWrapper>
        <Button mode="contained" onPress={() => {}}>
          Save
        </Button>
        <Spacer height={16} />
      </ButtonWrapper>
    </Container>
  );
};
