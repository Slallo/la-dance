import styled from "styled-components";
import img from "../../assets/home-background.png";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-image: url(${img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CTA = styled.div`
  max-width: 80%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`;

export const CTAText = styled.p`
  text-align: center;
`;

export const CTARow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const CTAButton = styled.div`
  text-align: center;
  background: ${(p) => (p.full ? "#d98163" : "none")};
  outline: none;
  border: 3px solid #d98163;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  max-width: 45%;
`;
