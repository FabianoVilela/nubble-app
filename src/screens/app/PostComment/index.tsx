import React from 'react';

import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export const PostComment = ({}: AppScreenProps<'PostCommentScreen'>) => {
  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
};
