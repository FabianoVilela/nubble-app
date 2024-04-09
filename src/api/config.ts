import { create } from './axios';

// TODO: Move this constants to .env
export const BASE_URL = 'http://192.168.0.124:3333';
export const AUTHORIZATION_TOKEN =
  'Bearer MQ.q7Mq8TtMlwNgu803awBwXf--azeozgTRMycIwvPWYX_NmpKIpUmRUBYrKHPe';

// TODO: Implement API services to abstract API calls
const axiosAPI = create({
  baseURL: BASE_URL,
  authorization: AUTHORIZATION_TOKEN,
});

export const api = axiosAPI;
