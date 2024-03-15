import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import { useAppSafeArea, useAppTheme, usePlatform } from '@hooks';

import { Box, BoxProps } from '../Box';

import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';
import { ScreenHeader } from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
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
          <ScreenHeader canGoBack={canGoBack} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
