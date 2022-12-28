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
  height: ${(props) => (props.size ? props.size + 'px' : 'auto')};
  margin-left: 2px;
`;
