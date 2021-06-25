import styled from "styled-components";
import background_image from "../../assets/teachers_background_image.png";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 75vh;
  background-position: center center;
  background-image: url(${background_image});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    height: 30vh;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    height: 50vh;
  }
`;

export const PageTitle = styled.span`
  font-size: 45px;
  border-bottom: 3px solid #f5ccbd;
  color: white;
  width: fit-content;
  font-weight: bold;
  @media only screen and (max-width: 600px) {
    font-size: 21px;
  }
`;
