import { create } from 'zustand';

type FiltersState = {
  municipalityId?: number;
  institutionId?: number;
  specialistId?: number;
  professionId?: number;
  serviceId?: number;

  setMunicipalityId: (by: number) => void;
  setInstitutionId: (by: number) => void;
  setSpecialistId: (by: number) => void;
  setProfessionId: (by: number) => void;
  setServiceId: (by: number) => void;
};

export const useFiltersStore = create<FiltersState>()(set => ({
  setMunicipalityId: (id: number) => set({ municipalityId: id }),
  setInstitutionId: (id: number) => set({ institutionId: id }),
  setSpecialistId: (id: number) => {
    console.log('🚀 ~ file: useFiltersStore.ts:26 ~ useFiltersStore ~ id:', id);

    set({ specialistId: id });
  },
  setProfessionId: (id: number) => set({ professionId: id }),
  setServiceId: (id: number) => set({ serviceId: id }),
}));
