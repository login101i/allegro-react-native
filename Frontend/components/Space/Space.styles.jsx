import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor: 'transparent'};
`;
