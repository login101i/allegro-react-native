import React from 'react';
import { ScrollView } from 'react-native';

import Space from '../../../../components/BlackSpace';
import Header from '../../components/header/Header';
import { SearchInput } from '../../components/search/SearchInput';
import Categories from '../../components/categories/Categories';
import Banner from '../../../../components/Banner/Banner';
import RoundedCategories from '../../components/RoundedCategories';
import Timer from '../../components/timer/Timer';
import WeekOccasions from '../../components/weekOccasions/WeekOccasions';
import HeaderTabs from '../../components/headerTabs/HeaderTabs';
import SpecialAdvert from '../../components/specialAdvert/SpecialAdvert';
import { ContainerView, BannerContainer, SmartBanner, BannerButton } from './StartScreen.styles';
import SmartBannerImg2 from '../../../../assets/images/smartBanner2.png';

const StartScreen = ({ navigation }) => {
  return (
    <ContainerView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} />
        <HeaderTabs />
        <SearchInput navigation={navigation} />
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
          <BannerButton title="Więcej" />
        </BannerContainer>
      </ScrollView>
    </ContainerView>
  );
};

export default StartScreen;
