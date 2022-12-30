import { useState, useEffect } from 'react';
import { View } from 'react-native';
import React from 'react';
import {  Space, Textt } from '../../components';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { SearchInput } from '../StartScreens/components/Search/SearchInput';
import { ScrollViewContainer, LastCategoriesContainer, LastCategory, CategoryTitle } from './Search.screen.styles';
import { Divider } from 'react-native-paper';
import { colors } from '../../infrasctructure/theme';
import Categories from '../StartScreens/components/Categories/Categories';

export const SearchScreen = () => {
  const [range, setRange] = useState('false');
  const [shipping, setShipping] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(211);
  const [description, setDescription] = useState('random description3');
  const [category, setCategory] = useState('Elektronika');
  const [stock, setStock] = useState(2);
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [seller, setSeller] = useState('amazon2');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!title) {
      alert('paste title of your product');
      return;
    }

    try {
      const { data } = await axios.post('http://192.168.43.35:8000/api/admin/product/new', {
        title,
        price,
        description,
        category,
        seller,
        stock
      });
      console.log(data);

      setTimeout(() => {
        alert('product posted');
        navigation.navigate('Start');
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <SearchInput fullWidth={true} />
      <ScrollViewContainer>
        <LastCategoriesContainer>
          <Textt bold size={16}>
            Ostatnio przeglądane kategorie
          </Textt>
          <LastCategory>
            <Textt>Salon {'>'}</Textt>
            <Textt>Regały</Textt>
          </LastCategory>
          <Divider />
          <LastCategory>
            <Textt>Pracownia {'>'}</Textt>
            <Textt>Regały</Textt>
          </LastCategory>
        </LastCategoriesContainer>
        <Space height="12px" backgroundColor={colors.lightGray} />

        <CategoryTitle>Wszystkie kategorie</CategoryTitle>
        <Divider />
        <Categories vertical navigation={navigation}/>
      </ScrollViewContainer>
    </View>
  );
};

