import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 155px;
  margin: 0 auto;
`;

export const Carousel = styled.View`
  display: flex;
  flex-direction: row;
  transform: translateX(${(props) => -(props.slideIndex * props.distance)}px);
  height: 40%;
  width: 100%;
  transition: all 1s ease-in-out;
`;

export const Slide = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.View`
  height: 100%;
  width: 100%;
`;

export const Image = styled.Image`
  background-position: center;
  width: auto;
  height: 120px;
  width: 100vw;
  object-fit: cover;
  animationkeyframes: example;
  animation-duration: ${(props) => (props.slideIndex ? '10s' : '')};
  animation-iteration-count: infinite;

  @keyframes example {
    0% {
      opacity: 0.2;
    }
    10% {
      opacity: 1;
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Dot = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${(props) => (props.i === props.slideIndex ? 'black' : 'grey')};
  margin: 10px 6px;
`;
