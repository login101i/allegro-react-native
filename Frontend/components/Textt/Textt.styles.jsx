import styled from 'styled-components/native';


export const TextContainer = styled.Text`
  font-size: 14px;
  font-size: ${(props) => props.size}px;
  margin: 0px 5px;
  color: ${(props) => (props.color ? props.color : props.theme.colors.textColor)};
  font-weight: ${(props) => (props.bold ? '900' : '600')};
  white-space: pre-wrap;
  border-width: 100%;
  white-space: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  margin-top: ${(props) => props.marginTop};
  border-bottom-width: ${(props) => props.borderBottom && '11px'};
  border-bottom-color: ${(props) => props.borderBottom && 'purple'};
  text-align: ${(props) => (props.textAlign ? 'center' : 'left')};
  border-radius: ${(props) => (props.background ? '4px' : '')};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  text-transform: ${(props) => (props.upperCase ? 'uppercase' : '')};
  &:hover {
    color: ${(props) => props.hovered && 'var(--linkColor)'};
    cursor: ${(props) => props.hovered && 'pointer'};
  }
  :first-letter {
    text-transform: capitalize;
  }
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  white-space: wrap;
  color: ${(props) => (props.color ? props.color : 'darkGrey')};
  justify-content: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  white-space: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  white-space: pre-wrap;
`;
