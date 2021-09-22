import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
});

http.interceptors.request.use((request) => {
  if (request?.params?.noAuth) {
    delete request.params.noAuth;

    request.headers.Authorization = undefined;
  }

  return request;
});
