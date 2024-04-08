import { User, UserAPI } from './types';

function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    username: userAPI.username,
    email: userAPI.email,
    profileURL: userAPI.profile_url,
    isOnline: userAPI.is_online,
    fullName: userAPI.full_name,
  };
}

export const userAdapter = {
  toUser,
};
