import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { usePresenter } from './usePresenter';

export const NewTrackerScreen = () => {
  const {
    institutionsData,
    municipalitiesData,
    professionsData,
    servicesData,
    specialistData,
  } = usePresenter();

  return (
    <View>
      <Text>NewTrackerScreen</Text>
    </View>
  );
};
