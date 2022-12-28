import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) => (props.align ? 'center' : 'left')};
  margin: 0px 3px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  // border-top: ${(props) => (props.borderTop ? '1px solid lightGrey ' : '')};
  color: ${(props) => (props.color ? props.color : 'black')};
  flex: ${(props) => (props.flexOne ? 1 : 'none')};
  border-bottom-width: ${(props) => (props.borderBottomWidth ? props.borderBottomWidth : '')};
  border-bottom-color: ${(props) => (props.borderBottomColor ? props.borderBottomColor : '')};
  width: ${(props) => props.fullWidth && '100%'};
  justify-content: ${(props) => (props.center ? 'center' : props.space ? 'space-between' : props.flexEnd ? 'flex-end' : '')};

  // border: ${(props) => (props.bbb ? '2px solid green' : '')};
`;
