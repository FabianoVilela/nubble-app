import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Text} from '../../../components/Text';
import {Button} from '../../../components/Button';
import {Screen} from '../../../components/Screen';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';

import {RootStackParamList} from '../../../routes/Routes';
import {LoginSchema, loginSchema} from './schema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function Login({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    console.log(`Email: ${email} ${'\n'} Senha: ${password}`);
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
        keyboardType="email-address"
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        bold
        mt="s10"
        onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>
      <Button
        marginTop="s48"
        title="Entrar"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
      <Button
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
