import { useAuth } from './auth.provider';

const baseURL = 'https://nlm3f3ird3.execute-api.eu-central-1.amazonaws.com/dev';

// fetch(
//   'https://nlm3f3ird3.execute-api.eu-central-1.amazonaws.com/dev/device',
//   {
//     method: 'POST',
//     headers: {
//       authorization: '' + (await ctx?.getBearer()),
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     // ,
//     body: JSON.stringify({ token: token }),
//   },

export const useFetch = () => {
  const ctx = useAuth();

  return async (
    path: string,
    params: { method: string; body: any } | undefined,
  ) => {
    let opt: RequestInit | undefined = params;
    if (!opt) {
      opt = {
        method: 'GET',
        headers: [],
      };
    }

    opt.headers = {
      ...(opt.headers || []),
      Authorization: (await ctx?.getBearer()) || '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    opt.body = JSON.stringify(opt.body);

    return fetch(baseURL + path, opt);
  };
};
