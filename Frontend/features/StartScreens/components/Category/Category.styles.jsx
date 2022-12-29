import styled from 'styled-components/native';

export const CategoryContainer = styled.View`
height:${(props) => props.height};
width:${(props) => props.width};
border-bottom-width:${(props) => props.borderBottomWidth};
border-bottom-color:${(props) => props.borderBottomColor};
height:${(props) => props.height}
display:flex;
flex-direction:${(props) => (props.flexDirection ? 'column' : 'row')}
justify-content: flex-start;
align-items:center;
margin:0px 1px;
`;
