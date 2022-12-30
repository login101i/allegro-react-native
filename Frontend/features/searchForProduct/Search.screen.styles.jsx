import styled from 'styled-components/native';

export const ScrollViewContainer = styled.ScrollView`
  position: relative;
  height: calc(100vh - 130px);
  background-color: white;
`;

export const LastCategoriesContainer = styled.View`
  width: 100%;
  padding: 5px 0px 5px 15px;
  margin-top: 10px;
`;
export const LastCategory = styled.View`
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CategoryTitle = styled.Text`
  padding: 10px 5px;
  font-size: 21px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.white};
  padding-left: 20px;
`;
