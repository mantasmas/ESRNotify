import { useState } from 'react';
import { useFiltersStore } from '../NewTrackerScreen/useFiltersStore';
import { useNavigation } from '@react-navigation/native';

export type Params = {
  listType:
    | 'municipalities'
    | 'institutions'
    | 'specialists'
    | 'professions'
    | 'services';
  items: Item[];
};

export type Item = {
  id: number;
  value: string;
};

export const usePresenter = (params: Params) => {
  const { goBack } = useNavigation();
  const {
    setMunicipalityId,
    setInstitutionId,
    setSpecialistId,
    setProfessionId,
    setServiceId,
  } = useFiltersStore();
  const [searchPrase, setSearchPhrase] = useState('');

  const onSelectItem = (item: Item) => {
    switch (params.listType) {
      case 'municipalities': {
        setMunicipalityId(item.id);
        break;
      }
      case 'institutions': {
        setInstitutionId(item.id);
        break;
      }
      case 'specialists': {
        setSpecialistId(item.id);
        break;
      }
      case 'professions': {
        setProfessionId(item.id);
        break;
      }
      case 'services': {
        setServiceId(item.id);
        break;
      }
    }

    goBack();
  };

  const onUseSearch = (value: string) => {
    setSearchPhrase(value);
  };

  const filteredItems = params.items.filter(({ value }) =>
    searchPrase
      ? value.toLowerCase().includes(searchPrase.toLowerCase())
      : true,
  );

  return { onUseSearch, onSelectItem, filteredItems };
};
