import React, { useState, useContext, useReducer, useEffect } from 'react';
import { StyleSheet, CheckBox, TouchableHighlight } from 'react-native';

import * as Yup from 'yup';
import { Pressable } from 'react-native';
import { colors } from '../../infrasctructure/theme';
import { AppButton, LogoLoader } from '../../components';
import { Flex, Textt, Space } from '../../components';
import { AppForm, SubmitButton, AppFormField } from '../../components/forms';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { LoginScreenHeader } from './LoginScreen/components/LoginScreenHeader';
import { MainContainer } from './LoginScreen/LoginScreen.styles';
export const LoginScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setState, state } = useContext(AuthenticationContext);
  console.log(state.user);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Email'),
    password: Yup.string().min(6).required().label('Password')
  });

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`http://localhost:8000/api/login`, values);

      await AsyncStorage.setItem('@auth', JSON.stringify(data));
      setTimeout(() => {
        setState({
          ...state,
          user: data.user || null,
          token: data.token || null
        });
        setIsLoading(false);
        navigation.navigate('Start');
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    if (state.user) {
      navigation.navigate('Start');
    }
  });
  if (isLoading) {
    return (
      <MainContainer>
        <LogoLoader
          source={{
            uri: 'https://maciejewski.com/wp-content/uploads/allegro.png'
          }}
          style={{
            width: '200px',
            height: '200px'
          }}
        />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Textt title="Moje Allegro" />
      <Space height="20px" />
      <LoginScreenHeader />

      <Space height="20px" />
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

      <Space height="20px" />
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

          <Space height="20px" />
          <Textt>Haslo</Textt>
          <AppFormField color={colors.white} name="password" secureTexttEntry autoCapitalize="none" TexttContentType="password" />

          <Space height="50px" />
          <SubmitButton color={colors.white} title="zaloguj się" buttonColor={colors.backgroundColorFaded} smallLetters="uppercase" />
        </AppForm>

        <Textt>lub</Textt>
        <AppButton color={colors.white} iconName="facebook" title="Zaloguj się przez Facebook" buttonColor={colors.fbColor} />
        <AppButton color={colors.white} iconName="google" title="Zaloguj się przez Google" />

        <Space height="20px" />
        <Flex space>
          <Pressable onPress={handleRegister}>
            <Textt color={colors.linkColor} size={16}>
              Zarejestruj się{' '}
            </Textt>
          </Pressable>
          <Textt color={colors.linkColor} size={16}>
            Nie pamiętam hasła
          </Textt>
        </Flex>

        <Space height="20px" />
        <Textt align wrap size={14}>
          Logując się do Allego akceptujesz Regulamin w aktualnym brzmieniu obowiązująym od dnia 25 paź 2021. Informacje o planowanych oraz
          archiwalnych zmianach Regulaminu są dostępne na stronie.
        </Textt>
      </Flex>
    </MainContainer>
  );
};
