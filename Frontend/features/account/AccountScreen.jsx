import React from 'react';

import { COLORS } from '../../constants';
import Icon from '../../components/Icon';
import Screen from '../../screens/Screen';
import BannerImg from '../../assets/images/banner.png';
import { AppButton } from '../../components';
import routes from '../navigation/routes';
import { Flex, Textt } from '../../components';
import Banner from '../../components/Banner/Banner';

function AccountScreenLogout({ navigation }) {
  return (
    <Screen>
      <Banner image={BannerImg} />

      <Flex column align center flexOne>
        <Textt title=" Witaj w Allegro" />

        <Textt textAlign="center " wrap>
          Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!
        </Textt>
        <AppButton
          title="zaloguj się"
          buttonColor={COLORS.allegroColor}
          smallLetters="uppercase"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Załóż konto"
          buttonColor={'transparent'}
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
