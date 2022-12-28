import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
width: ${(props) => (props.width ? props.width : '70%')}
height:36px;
align-items:center;
justify-content:center;
border-radius:4px;
margin-vertical:2px;
margin-horizontal:5px;
flex-direction:row;
border: ${(props) => (props.border ? props.border : 'none')}
margin-vertical:6px;
cursor:pointer;
background-color:${(props) => (props.buttonColor ? props.buttonColor : 'transparent')}
width:100%;
min-width:300px;

`;
