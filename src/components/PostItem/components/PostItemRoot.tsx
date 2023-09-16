import { ReactNode } from 'react';

import { Box } from '@components';

interface PostItemRootProps {
  children: ReactNode;
}

export function PostItemRoot({ children }: PostItemRootProps) {
  return (
    <Box marginBottom="s24" px="s24">
      {children}
    </Box>
  );
}
