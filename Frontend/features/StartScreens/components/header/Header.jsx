import React, { useContext, useEffect } from 'react';
import { Flex, Textt } from '../../../../components';
import { colors } from '../../../../infrasctructure/theme';
import { AuthenticationContext } from '../../../../services/authentication/AuthenticationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyledOpacity, Container } from './Header.styles';

const Header = ({ navigation }) => {
  const { state, setState } = useContext(AuthenticationContext);
  const headerIcons = [{ iconName: 'android-messages' }, { iconName: 'bell-ring-outline' }, { iconName: 'city-variant-outline' }];

  useEffect(() => {}, [state.user]);
  return (
    <Container>
      <Flex align space>
        <Textt variant="title" size={16}>
          {state.user?.name ? 'Witaj ' + state.user.name : 'Witaj'} !
        </Textt>
        <Flex width="40%" center>
          {headerIcons.map((icon, index) => (
            <StyledOpacity key={index}>
              <MaterialCommunityIcons
                name={icon.iconName}
                size={25}
                color={colors.darkGray}
                onClick={async () => {
                  await AsyncStorage.removeItem('@auth');
                  setState({ user: null, token: '' });
                  navigation.navigate('Login');
                }}
              />
            </StyledOpacity>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
