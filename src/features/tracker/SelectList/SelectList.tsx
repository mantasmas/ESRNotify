import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../../../navigationTypes';
import { Text, TextInput } from 'react-native-paper';
import styled from '@emotion/native';
import { Spacer } from '../../../components';
import { usePresenter } from './usePresenter';

type Props = NativeStackScreenProps<RootStackParamList, 'SelectList'>;

const ItemWrapper = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-color: #aaa;
  border-style: solid;
`;

export const SelectList = ({ route }: Props) => {
  const { onSelectItem, onUseSearch, filteredItems } = usePresenter(
    route.params,
  );

  return (
    <SafeAreaView>
      <TextInput
        label="Search..."
        onChangeText={onUseSearch}
        clearButtonMode="while-editing"
      />
      <Spacer height={16} />

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => {
          return (
            <ItemWrapper onPress={() => onSelectItem(item)}>
              <Text>{item.value}</Text>
            </ItemWrapper>
          );
        }}
      />
    </SafeAreaView>
  );
};
