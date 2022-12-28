import styled from 'styled-components/native';

export const Header = styled.View`
  display: flex;
  width: 100%;
  border-top-color: ${(props) => props.theme.colors.linkColor};
  border-top-width: 1px;
  justify-content: space-evenly;
  min-width: 260px;
  margin-bottom: 5px;
  width: 98%;
`;

export const SpanText = styled.Text`
  text-transform: uppercase;
  letter-spacing: 1.25px;
  text-align: center;
  padding: 8px;
  color: ${(props) => props.theme.colors.linkColor};
  cursor: pointer;
  text-align: center;
  font-size: 15px;
`;
