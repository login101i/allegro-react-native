import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: calc(100vh - 120px);
  z-index: 99;
  right: ${(props) => (props.payPalMove ? '-140px' : props.isPaypalShow ? '0px' : '-400px')};
  transition: 0.6s ease-in-out;
`;

export const Button = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 200px;
  height: 50px;
  padding: 7px 4px 8px 12px;
  border: none;
  border-top-left-radius: 20px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  transition: 0.6s ease-in-out;
`;

export const Logo = styled.Image`
  height: 30px;
  width: 30px;
  margin-right: 12px;
  cursor: pointer;
`;
export const PayPalText = styled.Text`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
`;
