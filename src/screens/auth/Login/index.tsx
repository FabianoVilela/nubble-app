import React from 'react';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {Screen} from '../../../components/Screen';
import {PasswordInput} from '../../../components/PasswordInput';

export function Login() {
  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        placeholder="Digite seu e-mail"
        label={'E-mail'}
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Text color="primary" preset="paragraphSmall" bold mt="s10">
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
}
