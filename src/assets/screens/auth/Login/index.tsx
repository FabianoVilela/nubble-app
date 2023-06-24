import React from 'react';
import {Text} from '../../../../components/Text';
import {TextInput} from '../../../../components/TextInput';
import {Box} from '../../../../components/Box';
import {Icon} from '../../../../components/Icon';
import {Button} from '../../../../components/Button';
import {Screen} from '../../../../components/Screen';

export function Login() {
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Box mb="s20">
        <TextInput
          placeholder="Digite seu e-mail"
          label={'E-mail'}
          boxProps={{mb: 's20'}}
        />
      </Box>
      <Box>
        <TextInput
          placeholder="Digite sua senha"
          label={'Senha'}
          RightComponent={<Icon name="eyeOn" color="gray2" />}
          boxProps={{mb: 's10'}}
        />
      </Box>

      <Text color="primary" preset="paragraphSmall" bold mt="s10">
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
}
