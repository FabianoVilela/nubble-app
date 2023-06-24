import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme';
import {Button} from './src/components/Button';
import {Box} from './src/components/Box';
import {TextInput} from './src/components/TextInput';
import {Icon} from './src/components/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
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
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
