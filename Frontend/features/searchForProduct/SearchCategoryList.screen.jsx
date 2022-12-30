import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { CategoryTitle } from './Search.screen.styles';
import { Divider } from 'react-native-paper';
import { BorderAndTitle } from '../../components';
import { Flex } from '../../components';

const MainContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100vh - 80px);
  width: 100vw;
`;
const ContentContainer = styled.View`
  width: 100%;
`;
const SubCategoryTitle = styled.Text`
  height: 50px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  color: ${(props) => props.theme.colors.black};
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.white};
  padding-left: 20px;
`;

const Container = styled.View`
  width: 100%;
`;

export const SearchCategoryListScreen = ({ route }) => {
  const { category } = route.params;
  console.log(
    '%cMyProject%cline:5%ccategory',
    'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',
    'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
    'color:#fff;background:rgb(60, 79, 57);padding:3px;border-radius:2px',
    category
  );

  return (
    <MainContainer>
      <ContentContainer>
        <CategoryTitle>{category.categoryTitle}</CategoryTitle>
        {category.subCategories.map((subCategory, index) => (
          <Container key={subCategory}>
            <Pressable onPress={() => console.log('pressed')}>
              <SubCategoryTitle>{subCategory}</SubCategoryTitle>
            </Pressable>
            <Divider />
          </Container>
        ))}
      </ContentContainer>
      <Flex fullWidth>
        <BorderAndTitle title="Otwórz oddział" />
      </Flex>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {}
});
