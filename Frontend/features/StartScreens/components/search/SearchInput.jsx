import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchContainer, PhotoIconContainer } from './SearchInput.styles';
import { Textt } from '../../../../components';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { colors } from '../../../../infrasctructure/theme';

export const SearchInput = ({ navigation, isSearchVisible, fullWidth = false }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      navigation.navigate(`SearchOutput`, { searchKeyword });
    } else {
      navigation.navigate('StartScreen');
    }
  };

  return (
    <SearchContainer isSearchVisible={isSearchVisible} fullWidth={fullWidth}>
      <Searchbar
        icon={!fullWidth && 'heart'}
        placeholder="Czego szukasz?"
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        value={searchKeyword}
        onSubmitEditing={handleSearch}
      />
      <PhotoIconContainer fullWidth={fullWidth}>
        <CameraAltIcon
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            color: colors.darkGray
          }}
        />
      </PhotoIconContainer>
    </SearchContainer>
  );
};
