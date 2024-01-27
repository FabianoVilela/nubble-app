import { create } from './axios';

// TODO: Move this constants to .env
export const BASE_URL = 'http://192.168.0.116:3333';
export const AUTHORIZATION_TOKEN =
  'Bearer MQ.-auq2m-MEG2GexD0Qf-dfZPnkUgt1MmqSoFBihg-iQjLfTO7FTOEJSEU2W9U';

// TODO: Implement API services to abstract API calls
const axiosAPI = create({
  baseURL: BASE_URL,
  authorization: AUTHORIZATION_TOKEN,
});

export const api = axiosAPI;
