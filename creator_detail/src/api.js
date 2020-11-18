import axios from 'axios';
import apiKeys from './apiKeys';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: apiKeys,
    language: 'en-US',
  },
});

export const getDataApi = {
  profile: () => api.get('person/287'),
  dataList: (page) => api.get('movie/top_rated', {
    params: {
      page: page
    }
  }),
};
