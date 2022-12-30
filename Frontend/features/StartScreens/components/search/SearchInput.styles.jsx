import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  padding: ${(props) => (props.fullWidth ? '0px' : '20px')};
  position: ${(props) => (props.isSearchVisible ? 'sticky ' : '')};
  top: ${(props) => (props.isSearchVisible ? '20px' : '0px')};
  left: 0;
  right: 0;
  transition: 0.3s all ease-in-out;
  z-index: 999;
`;
export const PhotoIconContainer = styled.View`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.fullWidth ? '15px' : '35px')};
  transform: translate(0px, -15px);
`;
