import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

import Space from "../../../components/BlackSpace";
import Header from "../components/header/Header";
import SearchInput from "../components/search/SearchInput";
import Categories from "../components/categories/Categories";
import Banner from "../../../components/Banner";
import RoundedCategories from "../components/RoundedCategories";
import Timer from "../components/timer/Timer";
import WeekOcasions from "../components/weekOcasions/WeekOcasions";
import HeaderTabs from "../components/headerTabs/HeaderTabs";
import SpecialAdvert from "../components/specialAdvert/SpecialAdvert";

const ContainerView = styled.View`
  display: flex;
  flex: 1;
  color: black;
  height: 100%;
  background-color: white;
`;

const StartScreen = ({ navigation }) => {
  return (
    <ContainerView>
      <ScrollView>
        <Header />
        <SpecialAdvert />
        <HeaderTabs />
        <SearchInput navigation={navigation} />
        <Categories />
        <Space />
        <Banner />
        <Space />
        <SpecialAdvert />
        <RoundedCategories />
        <Space />
        <Timer />
        <WeekOcasions navigation={navigation} />
        <Space height="70px" />
      </ScrollView>
    </ContainerView>
  );
};

export default StartScreen;
