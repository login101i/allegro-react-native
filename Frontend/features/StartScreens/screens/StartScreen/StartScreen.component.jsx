import React, { useState } from 'react';
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
import { ScrollViewContainer, BannerContainer, SmartBanner, BannerButton } from './StartScreen.styles';
import SmartBannerImg2 from '../../../../assets/images/smartBanner2.png';
import { MonetyAllegroAdv } from '../../components/MonetyAllegroAdv/MonetyAllegroAdv';
import { colors } from '../../../../infrasctructure/theme';


const StartScreen = ({ navigation }) => {
  const [isPaypalShow, setIsPaypalShow] = useState(true);
  const [payPalMove, setPaypalMove] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(null);

  const handlePayPalMove = () => {
    setPaypalMove(!payPalMove);
    // navigation.navigate('Koszyk');
    setIsSearchVisible(!isSearchVisible);
  };

  function handleScroll(event) {
    setPaypalMove(false);
    setIsPaypalShow(true);
    if (event.nativeEvent.contentOffset.y < 20) {
      setPaypalMove((prev) => true);
    }
    if (event.nativeEvent.contentOffset.y < 80) {
      setIsSearchVisible((prev) => false);
    }
    if (event.nativeEvent.contentOffset.y >= 200) {
      setIsSearchVisible((prev) => true);
    }
    if (event.nativeEvent.contentOffset.y >= 600) {
      setPaypalMove((prev) => true);
    }
    if (event.nativeEvent.contentOffset.y >= 700) {
      setPaypalMove((prev) => false);
      setIsPaypalShow((prev) => false);
    }
  }

  return (
    <>
      <ScrollViewContainer showsVerticalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
        <Header navigation={navigation} />
        <HeaderTabs />
        <SearchInput navigation={navigation} isSearchVisible={isSearchVisible} />
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
    </>
  );
};

export default StartScreen;
