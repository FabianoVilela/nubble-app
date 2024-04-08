import { Dimensions } from 'react-native';

import { Toast, ToastType, ToastPosition } from 'src/services/toast/types';

import { Box, BoxProps, Icon, IconProps, Text } from '@components';
import { useAppSafeArea } from '@hooks';
import { $shadowProps } from '@theme';

const { width } = Dimensions.get('screen');
const MAX_WIDTH = width * 0.9;

interface ToastContetProps {
  toast: Toast;
}

export const ToastContent = ({ toast }: ToastContetProps) => {
  const { top, bottom } = useAppSafeArea();

  const { message, action, type, position } = toast;
  const toastType: ToastType = type || 'success';
  const toastPosition: ToastPosition = position || 'top';

  return (
    <Box
      {...$boxStyle}
      style={[
        { [toastPosition]: toastPosition === 'top' ? top : bottom },
        $shadowProps,
      ]}
      justifyContent="space-around"
      gap="s16">
      <Icon {...mapTypeToIcon[toastType]} />
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

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $boxStyle: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: { ...$shadowProps },
};
