import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import {Space} from '../../../../components';
import Header from '../../components/header/Header';
import { SearchInput } from '../../components/search/SearchInput';
import Categories from '../../components/categories/Categories';
import Banner from '../../../../components/Banner/Banner';
import RoundedCategories from '../../components/RoundedCategories';
import Timer from '../../components/timer/Timer';
import WeekOccasions from '../../components/weekOccasions/WeekOccasions';
import HeaderTabs from '../../components/headerTabs/HeaderTabs';
import SpecialAdvert from '../../components/specialAdvert/SpecialAdvert';
import { ScrollViewContainer, ContainerView, BannerContainer, SmartBanner, BannerButton } from './StartScreen.styles';
import SmartBannerImg2 from '../../../../assets/images/smartBanner2.png';
import { MonetyAllegroAdv } from '../../components/MonetyAllegroAdv/MonetyAllegroAdv';

const StartScreen = ({ navigation }) => {
  const [isPaypalShow, setIsPaypalShow] = useState(true);
  const [payPalMove, setPaypalMove] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(null);

  const handlePayPalMove = () => {
    setPaypalMove(!payPalMove);
    // navigation.navigate('Koszyk');
    setIsSearchVisible(!isSearchVisible);
  };

  function handleScroll(event) {
    setPaypalMove(false);
    setIsPaypalShow(true);

    if (event.nativeEvent.contentOffset.y < 80) {
      setIsSearchVisible(false);
    }
    if (event.nativeEvent.contentOffset.y >= 201) {
      setPaypalMove(true);
      setIsSearchVisible(true);
    }
    if (event.nativeEvent.contentOffset.y >= 700) {
      setPaypalMove(false);
      setIsPaypalShow(false);
    }
  }

  return (
    <ContainerView>
      {isSearchVisible && <SearchInput navigation={navigation} isSearchVisible={isSearchVisible} />}
      <ScrollViewContainer showsVerticalScrollIndicator={false} onScroll={handleScroll}>
        <Header navigation={navigation} />
        {/* <HeaderTabs /> */}
        {!isSearchVisible && <SearchInput navigation={navigation} isSearchVisible={isSearchVisible} />}
        <Categories />
        <Space />
        <Banner />
        <Space />
        <RoundedCategories />
        <Space />
        <Timer />
        <WeekOccasions navigation={navigation} direction="row" filter="Pupil" />
        <Space />
        <WeekOccasions navigation={navigation} direction="row" filter="Perfumy" />
        <SpecialAdvert />
        <Space height="70px" />
        <BannerContainer>
          <SmartBanner source={SmartBannerImg2} />
          <BannerButton>Więcej</BannerButton>
        </BannerContainer>
      </ScrollViewContainer>
      <MonetyAllegroAdv isPaypalShow={isPaypalShow} handlePayPalMove={handlePayPalMove} payPalMove={payPalMove} />
    </ContainerView>
  );
};

export default StartScreen;
