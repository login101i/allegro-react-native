import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
width: ${(props) => (props.width ? props.width : '250px')}
border: ${(props) => (props.border ? props.border : 'none')};
background-color:${(props) => (props.buttonColor ? props.buttonColor : 'transparent')}
height:36px;
align-items:center;
justify-content:center;
border-radius:4px;
margin-vertical:2px;
margin-horizontal:5px;
flex-direction:row;
margin-vertical:6px;
cursor:pointer;

`;
