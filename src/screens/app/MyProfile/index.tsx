import React from 'react';

import { useAuthCredentials } from '@services';

import { Box, Icon, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export const MyProfile = ({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) => {
  const { authCredentials } = useAuthCredentials();

  const name = authCredentials?.user.fullName;

  return (
    <Screen>
      <Text preset="headingSmall">My Profile</Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <Text preset="headingMedium">{name}</Text>}
        <Icon
          name="settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />
      </Box>
    </Screen>
  );
};
