import { create } from './axios';

// TODO: Move this constants to .env
export const BASE_URL = 'http://192.168.0.116:3333';
export const AUTHORIZATION_TOKEN =
  'Bearer MQ.x7KpmvR6Y2CvgZWnIE4RwQPZ-aGL8ZgJdjDGLVdHc413lcsCR-pWrayJgbq-';

// TODO: Implement API services to abstract API calls
const axiosAPI = create({
  baseURL: BASE_URL,
  authorization: AUTHORIZATION_TOKEN,
});

export const api = axiosAPI;
