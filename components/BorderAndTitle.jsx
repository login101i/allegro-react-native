import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  
  width: 100%;
  border-top: 4px solid white;
  justify-content: space-evenly;
  border-top: 15px;
`;

const SpanText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1.25px;
  text-align: center;
  width: 100%;
  padding: 10px 5px;
  color: #00a790;
`;

const BorderAndTitle = (props) => {
  return (
    <div>
      <Header>
        <SpanText>{props.title || "Zobacz więcej"} </SpanText>
      </Header>
    </div>
  );
};

export default BorderAndTitle;
