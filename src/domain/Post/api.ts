import { PageAPI } from '@api';

import { Post } from './types';

const getList = async (): Promise<PageAPI<Post>> => {
  // TODO:Create API URL constant
  let response = await fetch('http://192.168.0.116:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer MQ.-auq2m-MEG2GexD0Qf-dfZPnkUgt1MmqSoFBihg-iQjLfTO7FTOEJSEU2W9U',
    },
  });

  let data: PageAPI<Post> = await response.json();

  return data;
};

export const postApi = {
  getList,
};
