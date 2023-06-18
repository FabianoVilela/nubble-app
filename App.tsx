import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Button} from './src/components/Button';

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

          <Button disabled preset="outline" title="Loading" loading />
        </SafeAreaView>
      </View>
    </ThemeProvider>
  );
}

export default App;
