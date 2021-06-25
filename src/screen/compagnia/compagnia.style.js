import styled from "styled-components";
import background_image from "../../assets/compagnia_background_image.png";

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 75vh;
  background-position: center center;
  background-image: url(${background_image});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.span`
  font-size: 45px;
  border-bottom: 3px solid #f5ccbd;
  color: white;
  width: fit-content;
  font-weight: bold;
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

export const Description = styled.p`
  width: 50%;
  margin: 90px 0;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: row wrap;
`;

export const ShowupImage = styled.img`
  background-size: cover;
  max-width: 60%;
  min-width: 200px;
`;

export const Legami = styled.img`
  background-size: cover;
  max-width: 40%;
`;
