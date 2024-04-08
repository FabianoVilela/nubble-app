import React from 'react';

import { useUserGetById } from '@domain';

import {
  ActivityIndicator,
  Box,
  ProfileAvatar,
  Screen,
  Text,
} from '@components';
import { AppScreenProps } from '@routes';

export function Profile({ route }: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const { loading, error, user } = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {loading && <ActivityIndicator />}
      {error && !loading && <Text> error ao carregar perfil do usuário</Text>}
      {user && !loading && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileURL}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}
