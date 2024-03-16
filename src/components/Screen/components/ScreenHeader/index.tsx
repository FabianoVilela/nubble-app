import { useNavigation } from '@react-navigation/native';

import { Box, Icon, ScreenProps, Text, TouchableOpacityBox } from '@components';

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;

const ICON_SIZE = 20;

export const ScreenHeader = ({ canGoBack, title }: Props) => {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          onPress={navigation.goBack}>
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      <Box
        flex={1}
        alignItems="center"
        style={{ paddingRight: canGoBack ? ICON_SIZE : 0 }}>
        {title && <Text preset="headingSmall">{title}</Text>}
      </Box>
    </Box>
  );
};
