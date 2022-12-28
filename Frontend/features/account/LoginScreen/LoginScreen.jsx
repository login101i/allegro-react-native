import React, { useState, useContext, useReducer } from 'react';
import { StyleSheet, CheckBox, TouchableHighlight } from 'react-native';

import * as Yup from 'yup';

import { colors } from '../../../infrasctructure/theme';
import { AppButton, LogoLoader } from '../../../components';
import { Flex, Textt } from '../../../components';

import { AppForm, SubmitButton, AppFormField } from '../../../components/forms';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { LoginScreenHeader } from './components/LoginScreenHeader';

const LoginScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user, saveUser, setState, state } = useContext(AuthenticationContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Email'),
    password: Yup.string().min(5).required().label('Password')
  });

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`http://localhost:8000/api/login`, values);

      setState({
        ...state,
        user: data.user || null,
        token: data.token || null
      });
      await AsyncStorage.setItem('@auth', JSON.stringify(data));

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('StartScreen');
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <Flex align center flexOne>
        <LogoLoader
          source={{
            uri: 'https://maciejewski.com/wp-content/uploads/allegro.png'
          }}
          style={{
            width: '200px',
            height: '200px'
          }}
        />
      </Flex>
    );
  }

  return (
    <Flex column align center flexOne>
      <Textt tile="Moje Allegro" />
      <LoginScreenHeader />
      <Flex>
        <Flex>
          <CheckBox value={isSelected} onValueChange={setSelection} center />
          <Textt>Login lub e-mail</Textt>
        </Flex>

        <Flex>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Textt>Numer telefonu</Textt>
        </Flex>
      </Flex>
      <Flex center column align width="80%">
        <AppForm validationSchema={validationSchema} initialValues={{ email: '', password: '' }} onSubmit={(values) => handleLogin(values)}>
          <Textt>Login lub e-mail</Textt>
          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            TexttContentType="emailAddress"
          />

          <Textt>Haslo</Textt>
          <AppFormField name="password" secureTexttEntry autoCapitalize="none" TexttContentType="password" />
          <SubmitButton title="zaloguj się" buttonColor={colors.backgroundColorFaded} smallLetters="uppercase" />
        </AppForm>

        <Textt>lub</Textt>
        <AppButton iconName="facebook" title="Zaloguj się przez Facebook" TexttColor="white" buttonColor={colors.fbColor} />
        <AppButton iconName="google" title="Zaloguj się przez Google" color={colors.darkGray} />
        <Flex space>
          <Textt color={colors.linkColor} size={16}>
            Zarejestruj się{' '}
          </Textt>
          <Textt color={colors.linkColor} size={16}>
            Nie pamiętam hasła
          </Textt>
        </Flex>

        <Textt align wrap size={14}>
          Logując się do Allego akceptujesz Regulamin w aktualnym brzmieniu obowiązująym od dnia 25 paź 2021. Informacje o planowanych oraz
          archiwalnych zmianach Regulaminu są dostępne na stronie.
        </Textt>
      </Flex>
    </Flex>
  );
};

export default LoginScreen;
