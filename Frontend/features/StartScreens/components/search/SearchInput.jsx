import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "./SearchInput.styles";

export const SearchInput = ({ navigation }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    console.log("searching for products");

    if (searchKeyword.trim()) {
      navigation.navigate(`SearchOutput` , {searchKeyword});
    } else {
      navigation.navigate("StartScreen");
    }
  };

  return (
    <>
      <SearchContainer>
        <Searchbar
          icon={"heart"}
          placeholder="Czego szukasz?"
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
          value={searchKeyword}
          onSubmitEditing={handleSearch}
        />
      </SearchContainer>
    </>
  );
};

