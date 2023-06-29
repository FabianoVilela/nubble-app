import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button} from '../../../components/Button';
import {Icon} from '../../../components/Icon';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';

import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function Success({route, navigation}: ScreenProps) {
  function goBackToBegin() {
    navigation.navigate('LoginScreen');
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
