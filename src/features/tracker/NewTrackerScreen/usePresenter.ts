import { useQuery } from '@tanstack/react-query';
import {
  getInstitutions,
  getMunicipalities,
  getProfessions,
  getServices,
  getSpecialists,
} from '../../../api';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useFiltersStore } from './useFiltersStore';
import { RootStackParamList } from '../../../navigationTypes';

export const usePresenter = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { data: municipalitiesData } = useQuery(
    ['municipalities'],
    getMunicipalities,
  );
  const { data: institutionsData } = useQuery(
    ['institutions'],
    getInstitutions,
  );
  const { data: specialistData } = useQuery(['specialists'], getSpecialists);
  const { data: professionsData } = useQuery(['professions'], getProfessions);
  const { data: servicesData } = useQuery(['services'], getServices);
  const {
    municipalityId,
    institutionId,
    specialistId,
    professionId,
    serviceId,
  } = useFiltersStore();

  const onSelectMunicipality = () => {
    navigation.navigate('SelectList', {
      items: municipalitiesData!.map(({ admId, pavadinimas }) => ({
        id: admId,
        value: pavadinimas,
      })),
      listType: 'municipalities',
    });
  };

  const onSelectInstitution = () => {
    navigation.navigate('SelectList', {
      items: institutionsData!.map(({ istgId, nameExt }) => ({
        id: istgId,
        value: nameExt,
      })),
      listType: 'institutions',
    });
  };

  const onSelectSpecialist = () => {
    navigation.navigate('SelectList', {
      items: specialistData!.map(({ id, fullName }) => ({
        id,
        value: fullName,
      })),
      listType: 'specialists',
    });
  };

  const onSelectProfession = () => {
    navigation.navigate('SelectList', {
      items: professionsData!.map(({ id, name }) => ({
        id,
        value: name,
      })),
      listType: 'professions',
    });
  };

  const onSelectService = () => {
    navigation.navigate('SelectList', {
      items: servicesData!.map(({ id, name }) => ({
        id,
        value: name,
      })),
      listType: 'services',
    });
  };

  const selectedMunicipality = municipalitiesData?.find(
    ({ admId }) => admId === municipalityId,
  );
  const selectedInstitution = institutionsData?.find(
    ({ istgId }) => istgId === institutionId,
  );
  const selectedSpecialist = specialistData?.find(
    ({ id }) => id === specialistId,
  );
  const selectedProfession = professionsData?.find(
    ({ id }) => id === professionId,
  );
  const selectedService = servicesData?.find(({ id }) => id === serviceId);

  return {
    municipalitiesData,
    institutionsData,
    specialistData,
    professionsData,
    servicesData,
    onSelectMunicipality,
    selectedMunicipality,
    onSelectInstitution,
    selectedInstitution,
    onSelectSpecialist,
    selectedSpecialist,
    selectedProfession,
    selectedService,
    onSelectService,
    onSelectProfession,
  };
};
