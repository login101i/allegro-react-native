import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import ListItem from '../components/ListItem/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import { COLORS } from '../constants';
import Icon from '../components/Icon';
import Screen from './Screen';
import AppText from '../components/AppText';
import Banner from '../assets/images/banner.png';
import SimpleText from '../components/SimpleText';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: COLORS.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: COLORS.secondary
    },
    targetScreen: 'tutaj route'
  }
];

function AccountScreenLogout({ navigation }) {
  return (
    <Screen>
      <View style={styles.flexRow}>
        <AppText title="Moje allegro" textColor="white" />
        <Icon name={'facebook'} textColor={COLORS.lightGrey} />
      </View>
      <Text>Nawigacja zakupy lokalnie konto</Text>
      <Image source={Banner} style={styles.banner} />

      <View style={{ paddingVertical: '10px' }}>
        <AppText title=" Witaj w Allegro" widthh="100%" center textColor="white" icon iconName="hand" />

        <SimpleText smallText textAlign="center">
          Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!
        </SimpleText>
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
        />
      </View>

      {/* <View >
        <ListItem title={"Maciej"} subTitle={"Kruszyniak"} image={require("../assetS/images/ethereum.png")} />
      </View>
      <View style={styles.container}>
        <FlatList data={menuItems} keyExtractor={(menuItem) => menuItem.title} ItemSeparatorComponent={ListItemSeparator} renderItem={({ item }) => <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />} />
      </View>
      <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  banner: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
    marginVertical: 50
  }
});

export default AccountScreenLogout;
