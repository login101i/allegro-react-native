import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Flex, Textt, Space, AppButton, ActivityIndicator, LogoLoader } from '../../components';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';
import { MainContainer } from './LoginScreen/LoginScreen.styles';
import { colors } from '../../infrasctructure/theme';
import routes from '../navigation/routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LogoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const { state, setState } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!state.user) {
      navigation.navigate('Login');
    }
  }, [state.user]);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://localhost:8000/api/logout`);
      console.log(data);
      await AsyncStorage.removeItem('@auth');

      setTimeout(() => {
        setState({
          ...state,
          user: null,
          token: null
        });

        setIsLoading(false);
        navigation.navigate(routes.AccountScreenLogout);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <MainContainer>
        <LogoLoader
          source={{
            uri: 'https://maciejewski.com/wp-content/uploads/allegro.png'
          }}
          style={{
            width: '300px',
            height: '300px'
          }}
        />
      </MainContainer>
    );
  }
  return (
    <MainContainer>
      <Textt title="Moje Allegro" />
      <Space height="20px" />
      <Flex center column align width="100%">
        <AppButton title="Wyloguj się" buttonColor={colors.allegroColor} smallLetters="uppercase" onPress={handleLogout} />{' '}
      </Flex>
    </MainContainer>
  );
};
