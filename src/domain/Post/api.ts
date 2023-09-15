import { postListMock } from './postListMock';
import { Post } from './types';

async function getList(): Promise<Post[]> {
  //NOTE: Simulate API fetch delay (1s)
  await new Promise(resolve => setTimeout(resolve, 1000));

  return postListMock;
}

export const postApi = {
  getList,
};
