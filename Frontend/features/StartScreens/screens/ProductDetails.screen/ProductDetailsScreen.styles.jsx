import styled from 'styled-components/native';

export const MainContainer = styled.View`
  height: 100vh;
`;
export const CustomScrollView = styled.ScrollView`
  background-color: white;
  opacity: 0.8;
  z-index: 2;
  filter: ${(props) => (props.modal ? 'blur(3px)' : 'none')};
`;
export const ButtonsContainer = styled.View`
  position: absolute;
  bottom: 90px;
  left: 0%;
  right: 0px;
  z-index: 30;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
