import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  padding: 20px;
  position: ${(props) => (props.isSearchVisible ? 'sticky ' : '')};
  top: ${(props) => (props.isSearchVisible ? '20px' : '0px')};
  left: 0;
  right: 0;
  transition: 0.3s all ease-in-out;
  z-index: 999;
`;
