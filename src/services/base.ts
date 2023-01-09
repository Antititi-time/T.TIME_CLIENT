import axios from 'axios';

type Methods = 'get' | 'post' | 'delete' | 'put';

interface apiDataType {
  url: string;
  data?: object;
  params?: object;
  headers?: object;
}

interface apiType extends apiDataType {
  method: Methods;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const baseHeaders = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

const sendRequest = ({ url, params, method, headers }: apiType) => {
  return axios[method](BASE_URL + url, {
    header: { ...baseHeaders, ...headers },
    params,
  }).then((response) => {
    return { ...response.data, axiosStatus: response.status };
  });
};

const sendRequestWithData = ({ url, data, method, headers }: apiType) => {
  return axios[method](BASE_URL + url, data, {
    headers: { ...baseHeaders, ...headers },
  }).then((response) => {
    return response.data;
  });
};

export const api = {
  get: ({ url, params, headers }: apiDataType) => sendRequest({ url, params, method: 'get', headers }),
  post: ({ url, data, headers }: apiDataType) => sendRequestWithData({ url, data, method: 'post', headers }),
  put: ({ url, data, headers }: apiDataType) => sendRequestWithData({ url, data, method: 'put', headers }),
};
