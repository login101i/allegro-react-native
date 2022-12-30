import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import dummyData from '../../../../infrasctructure/data';
import { Category } from '../Category/Category';
import { BorderAndTitle } from '../../../../components';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Categories = ({ vertical }) => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView horizontal={vertical ? false : true} vertical={vertical && true} showsHorizontalScrollIndicator={false}>
        {dummyData.categories.map(({ icon, categoryTitle, subCategories, borderColor, id }) => (
          <TouchableWithoutFeedback
            key={id}
            onPress={() => navigation.navigate('SearchCategoryListScreen', { category: { categoryTitle, subCategories } })}
          >
            <Category
              icon={icon}
              title={categoryTitle}
              borderColor={borderColor}
              borderWidth={6}
              vertical={vertical}
              width={vertical && '20vw'}
            />
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      {!vertical && <BorderAndTitle title="Kategorie" />}
    </>
  );
};

export default Categories;
