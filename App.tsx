import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Button} from './src/components/Button';
import {Icon} from './src/components/Icon';
import {Box} from './src/components/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <View style={{paddingHorizontal: 24}}>
        <SafeAreaView>
          <StatusBar barStyle={'light-content'} />
          <Text preset="headingLarge">Nubble</Text>
          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Primary disabled" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />
          <Button
            disabled
            preset="outline"
            title="Loading"
            loading
            marginBottom="s12"
          />

          <Box flexDirection="row" marginBottom="s12">
            <Icon name="eyeOn" color="error" size={30} />
            <Icon name="eyeOff" color="success" size={30} />
          </Box>
        </SafeAreaView>
      </View>
    </ThemeProvider>
  );
}

export default App;
