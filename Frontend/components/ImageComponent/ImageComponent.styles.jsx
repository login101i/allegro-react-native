import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  object-fit: cover;
  cursor: pointer;
  max-height: 250px;
  height: ${(props) => (props.height ? props.height : '25px')};
  width: ${(props) => (props.width ? props.width : '0px')};
  margin-left: 2px;
  object-fit: cover;
`;
