import { apiMedium } from './api';

export const getAllStories = () => {
  return apiMedium.get('/v1/api.json?rss_url=https://medium.com/feed/@rafael.mosias2');
};