import { useEffect } from 'react';
import { Dimensions } from 'react-native';

import { useToast } from '@services';

import { Box, BoxProps, Icon, Text } from '@components';
import { useAppSafeArea } from '@hooks';
import { $shadowProps } from '@theme';

const { width } = Dimensions.get('screen');
const MAX_WIDTH = width * 0.9;
const DEFAULT_DURATION = 2000;

export const Toast = () => {
  const { bottom } = useAppSafeArea();

  const { toast, hideToast } = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  const { message, type, action } = toast;

  return (
    <Box bottom={bottom} {...$boxStyle} justifyContent="space-around" gap="s16">
      {type ? <Icon color={type} name="checkRound" /> : null}
      <Text style={{ flexShrink: 1 }} preset="paragraphSmall">
        {message}
      </Text>
      {action ? (
        <Text
          color="carrotSecondary"
          preset="paragraphSmall"
          onPress={action.onPress}>
          {action.title}
        </Text>
      ) : null}
    </Box>
  );
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: { ...$shadowProps },
};
