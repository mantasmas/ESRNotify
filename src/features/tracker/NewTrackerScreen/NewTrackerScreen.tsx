import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { usePresenter } from './usePresenter';
import { Spacer } from '../../../components';
import styled from '@emotion/native';

const Container = styled.View`
  flex-grow: 1;
  padding: 0 16px;
`;

const ButtonWrapper = styled.View`
  padding: 16px 0;
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
      <ScrollView>
        <Spacer height={16} />
        <Pressable onPress={onSelectMunicipality}>
          <TextInput
            label="Municipality"
            right={<TextInput.Icon icon="menu-down" />}
            value={selectedMunicipality?.pavadinimas}
            editable={false}
            pointerEvents="none"
          />
        </Pressable>
        <Spacer height={16} />
        <Pressable onPress={onSelectInstitution}>
          <TextInput
            label="Institution"
            right={<TextInput.Icon icon="menu-down" />}
            value={selectedInstitution?.istgPavadinimas}
            pointerEvents="none"
            editable={false}
          />
        </Pressable>
        <Spacer height={16} />
        <Pressable onPress={onSelectSpecialist}>
          <TextInput
            label="Specialist"
            right={<TextInput.Icon icon="menu-down" />}
            editable={false}
            value={selectedSpecialist?.fullName}
            pointerEvents="none"
          />
        </Pressable>
        <Spacer height={16} />
        <Pressable onPress={onSelectProfession}>
          <TextInput
            label="Profession"
            right={<TextInput.Icon icon="menu-down" />}
            editable={false}
            value={selectedProfession?.name}
            pointerEvents="none"
          />
        </Pressable>
        <Spacer height={16} />
        <Pressable onPress={onSelectService}>
          <TextInput
            label="Service"
            right={<TextInput.Icon icon="menu-down" />}
            editable={false}
            value={selectedService?.name}
            pointerEvents="none"
          />
        </Pressable>
      </ScrollView>

      <ButtonWrapper>
        <Button mode="contained" onPress={() => {}}>
          Save
        </Button>
        <Spacer height={16} />
      </ButtonWrapper>
    </Container>
  );
};
