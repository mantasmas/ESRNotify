export type IprResponse<T> = {
  data: T[];
};

export type Municipality = {
  admId: number;
  pavadinimas: string;
};

export const getMunicipalities = async () => {
  return fetch('https://ipr.esveikata.lt/api/searchesNew/municipalities')
    .then(res => res.json())
    .then((res: IprResponse<Municipality>) => res.data);
};

export type Institution = {
  istgId: number;
  istgPavadinimas: string;
  municipalityId: number;
  nameExt: string;
};

export const getInstitutions = async () => {
  return fetch('https://ipr.esveikata.lt/api/searchesNew/institutions')
    .then(res => res.json())
    .then((res: IprResponse<Institution>) => res.data);
};

export type Specialist = {
  fullName: string;
  institution: {
    istgId: number;
  };
  id: number;
};

export const getSpecialists = async () => {
  return fetch('https://ipr.esveikata.lt/api/searchesNew/specialists')
    .then(res => res.json())
    .then((res: IprResponse<Specialist>) => res.data);
};

export type Profession = {
  id: number;
  name: string;
  code: string;
};

export const getProfessions = () => {
  return fetch('https://ipr.esveikata.lt/api/searchesNew/professions')
    .then(res => res.json())
    .then((res: IprResponse<Profession>) => res.data);
};

export type Service = {
  id: number;
  name: string;
  professions: Profession[];
};

export const getServices = () => {
  return fetch(
    'https://ipr.esveikata.lt/api/searchesNew/healthcare-filter-services',
  )
    .then(res => res.json())
    .then((res: IprResponse<Service>) => res.data);
};
