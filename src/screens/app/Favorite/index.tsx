import React from 'react';

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Favorite(props: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Favorite Screen</Text>
    </Screen>
  );
}
