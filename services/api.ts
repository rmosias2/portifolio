import axios from 'axios';

export const apiMedium = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_RSS2_API,
});

