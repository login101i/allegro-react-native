import React from 'react';
import { ScrollView } from 'react-native';
import { dummyData } from '../../../../constants';
import { Category } from '../Category/Category';
import { BorderAndTitle } from '../../../../components';

const Categories = () => {
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {dummyData.categories.map(({ icon, categoryTitle, borderColor, id }) => (
          <Category key={id} icon={icon} title={categoryTitle} borderBottomColor={borderColor} borderBottomWidth={6} />
        ))}
      </ScrollView>
      <BorderAndTitle title="Kategorie" />
    </>
  );
};

export default Categories;
