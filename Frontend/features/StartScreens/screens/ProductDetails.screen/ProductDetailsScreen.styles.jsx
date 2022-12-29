import styled from 'styled-components/native';

export const MainContainer = styled.View`
  height: 100vh;
`;
export const CustomScrollView = styled.ScrollView`
  background-color: ${(props) => (props.modal ? 'grey' : 'white')};
  opacity: 0.8;
`;
export const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 80px;
  left: 0%;
  right: 0px;
  z-index: 30;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
