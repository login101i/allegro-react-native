import React, { useContext, useEffect } from 'react';
import { COLORS } from '../../constants';
import Screen from '../../screens/Screen';
import { AppButton } from '../../components';
import routes from '../navigation/routes';
import { Flex, Textt, Space } from '../../components';
import { AuthenticationContext } from '../../services/authentication/AuthenticationContext';

function AccountScreenLogout({ navigation }) {
  const { state } = useContext(AuthenticationContext);
  console.log(state);

  useEffect(() => {
    console.log('useEffect');

    if (state.user) {
      console.log('jest użytkownik zalogowany');
      navigation.navigate('Logout');
    }
  }, [state]);
  return (
    <Screen>
      <Flex column align center flexOne>
        <Textt title=" Witaj w Allegro" />
        <Space height="50px" />
        <Textt textAlign="center " wrap>
          Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!
        </Textt>
        <Space height="30px" />
        <AppButton
          title="zaloguj się"
          buttonColor={COLORS.allegroColor}
          smallLetters="uppercase"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Załóż konto"
          buttonColor={'transparent'}
          color={COLORS.allegroColor}
          textColor="linkColor"
          smallLetters="uppercase"
          onPress={() => navigation.navigate(routes.REGISTER)}
          border="1px solid orange"
        />
      </Flex>
    </Screen>
  );
}

export default AccountScreenLogout;
