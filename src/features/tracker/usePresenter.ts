import { useQuery } from '@tanstack/react-query';
import {
  getInstitutions,
  getMunicipalities,
  getProfessions,
  getServices,
  getSpecialists,
} from '../../api';

export const usePresenter = () => {
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

  return {
    municipalitiesData,
    institutionsData,
    specialistData,
    professionsData,
    servicesData,
  };
};
