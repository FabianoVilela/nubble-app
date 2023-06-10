import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Text} from './src/components/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Text preset="headingLarge">Nubble</Text>
    </SafeAreaView>
  );
}

export default App;
