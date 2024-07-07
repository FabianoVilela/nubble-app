import React from 'react';

import { useAuthSignUp } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  ActivityIndicator,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps, AuthStackParamList } from '@routes';

import { useAsyncValidation } from './hooks/useAsyncValidation';
import { signUpSchema, SignUpSchema } from './schema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignUp = ({}: AuthScreenProps<'SignUpScreen'>) => {
  const { signUp, isLoading } = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });
  const { reset } = useResetNavigationSuccess();
  const { control, formState, handleSubmit, watch, getFieldState } =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const submitForm = (formValues: SignUpSchema) => {
    signUp(formValues);
  };

  const { usernameValidation, emailValidation } = useAsyncValidation({
    watch,
    getFieldState,
  });

  const isFormValid =
    !formState.isValid ||
    usernameValidation.notReady ||
    emailValidation.notReady;

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
        errorMessage={
          usernameValidation.errorMessage ? 'username indisponível' : undefined
        }
      />
      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{ mb: 's20' }}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
        errorMessage={
          emailValidation.errorMessage ? 'e-mail indisponível' : undefined
        }
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button
        loading={isLoading}
        disabled={isFormValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
};
