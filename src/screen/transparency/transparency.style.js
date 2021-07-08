import styled from "styled-components";
import background_image from "../../assets/transparency_background_image.png";

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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 80%;
  margin: 80px 0;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
`;

export const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ebebeb;
  margin: 35px 0;
`;

export const List = styled.ul`
  width: 100%;
  list-style: inside;
  font-weight: bold;
  margin: 0;
  padding-left: 20px;
`;

export const ListElement = styled.li`
  font-weight: normal;
`;

export const CurriculumLink = styled.a`
  color: #3d3d3d;
  font-weight: bold;
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  background: white;
  justify-content: center;
  padding-top: 30px;
`;

export const Logo = styled.img``;
