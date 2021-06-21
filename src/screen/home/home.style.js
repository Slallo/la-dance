import styled from "styled-components";
import img from "../../assets/home-background.png";

export const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CTA = styled.div`
  max-width: 70%;
  color: white;
`;
