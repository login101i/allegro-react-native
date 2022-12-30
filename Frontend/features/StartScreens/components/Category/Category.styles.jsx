import styled from 'styled-components/native';

export const CategoryContainer = styled.View`
height:${(props) => props.height};
width:${(props) => props.width};

border-left-width:${(props) => (props.vertical ? props.borderWidth : '0px')};
border-left-color:${(props) => props.borderColor};

border-bottom-width:${(props) => (props.vertical ? '0px' : props.borderWidth)};
border-bottom-color:${(props) => props.borderColor};


height:${(props) => props.height}
display:flex;
flex-direction:${(props) => (props.flexDirection ? 'column' : 'row')};
justify-content: center;
align-items:center;
margin: ${(props) => (props.vertical ? '0px' : '0px 0px 2px 0px')}
`;
