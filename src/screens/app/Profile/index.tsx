import React from 'react';

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Profile(props: AppTabScreenProps<'ProfileScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Profile Screen</Text>
    </Screen>
  );
}
