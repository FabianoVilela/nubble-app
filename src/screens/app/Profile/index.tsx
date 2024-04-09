import React from 'react';

import { useGetUserById } from '@domain';

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

  const { isLoading, isError, data: user } = useGetUserById(userId);

  return (
    <Screen canGoBack>
      {isLoading && <ActivityIndicator />}
      {isError && !isLoading && (
        <Text>Error ao carregar perfil do usuário</Text>
      )}
      {!isError && !isLoading && user && (
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
