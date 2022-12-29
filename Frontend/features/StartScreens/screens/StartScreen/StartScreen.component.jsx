import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Space } from '../../../../components';
import Header from '../../components/header/Header';
import { SearchInput } from '../../components/Search/SearchInput';
import Categories from '../../components/Categories/Categories';
import Banner from '../../../../components/Banner/Banner';
import RoundedCategories from '../../components/RoundedCategories';
import Timer from '../../components/Timer/Timer';
import WeekOccasions from '../../components/WeekOccasions/WeekOccasions';
import HeaderTabs from '../../components/HeaderTabs/HeaderTabs';
import SpecialAdvert from '../../components/SpecialAdvert/SpecialAdvert';
import { ScrollViewContainer, ContainerView, BannerContainer, SmartBanner, BannerButton } from './StartScreen.styles';
import SmartBannerImg2 from '../../../../assets/images/smartBanner2.png';
import { MonetyAllegroAdv } from '../../components/MonetyAllegroAdv/MonetyAllegroAdv';
import { colors } from '../../../../infrasctructure/theme';
import { CustomIcon } from '../../../../components';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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
        <HeaderTabs />
        {!isSearchVisible && <SearchInput navigation={navigation} isSearchVisible={isSearchVisible} />}
        <Categories />
        <Space backgroundColor={colors.lightGray} />
        <Banner />
        <Space backgroundColor={colors.lightGray} />
        <RoundedCategories />
        <Space backgroundColor={colors.lightGray} />
        <Timer />
        <WeekOccasions navigation={navigation} direction="row" filter="Pupil" />
        <Space backgroundColor={colors.lightGray} />
        <WeekOccasions navigation={navigation} direction="row" filter="Perfumy" />
        <SpecialAdvert />
        <Space backgroundColor={colors.lightGray} height="70px" />
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
