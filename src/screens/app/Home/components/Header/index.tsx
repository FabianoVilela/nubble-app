import React from 'react';

import { SimploLogo } from '@brand';

import { Box, BoxProps, Icon } from '@components';
import { useAppSafeArea } from '@hooks';

export function Header() {
  const { top } = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{ paddingTop: top }}>
      <SimploLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bell" />
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',

  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
