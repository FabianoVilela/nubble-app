import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAppSafeArea, useAppTheme, usePlatform } from '@hooks';

import { Box, TouchableOpacityBox, BoxProps } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';

interface ScreenProps extends BoxProps {
  title?: string;
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  title,
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const navigation = useNavigation();
  const { isIos } = usePlatform();
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={isIos ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}>
          {canGoBack && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              onPress={navigation.goBack}>
              <Icon name="arrowLeft" color="primary" />
              {title ? (
                <Box flex={1} alignItems="center" ml="s8">
                  <Text preset="headingSmall" color="grayBlack">
                    {title}
                  </Text>
                </Box>
              ) : null}
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
