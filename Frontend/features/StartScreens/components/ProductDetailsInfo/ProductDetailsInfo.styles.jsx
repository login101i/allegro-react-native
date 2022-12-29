import styled from 'styled-components/native';

export const MainContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  justify-content: space-between;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  flex-direction: row;
  width: 100%;
`;


export const StarIconContainer = styled.View`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Counter = styled.View`
  padding: 5px;
`;
