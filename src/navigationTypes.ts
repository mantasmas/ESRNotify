export type Item = {
  id: number;
  value: string;
};

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  SelectList: {
    listType:
      | 'municipalities'
      | 'institutions'
      | 'specialists'
      | 'professions'
      | 'services';
    items: Item[];
  };
};
