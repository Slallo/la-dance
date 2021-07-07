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

export const TeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: ${(p) => (p.isReverse ? "row-reverse" : "row")} nowrap;
  width: 80%;
  margin: 80px 0;
  @media only screen and (max-width: 1368px) {
    flex-flow: ${(p) => (p.isReverse ? "column" : "column")} nowrap;
    margin: 30px 0;
    width: 90%;
  }
`;

export const TeacherInfo = styled.div`
  margin: ${(p) => (p.isReverse ? "0px 0px 0px 40px" : "0px 40px 0px 0px")};
  max-width: 50%;
  @media only screen and (max-width: 1368px) {
    margin: 0;
    max-width: 100%;
  }
`;

export const TeacherImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  min-width: 50%;
  @media only screen and (max-width: 1368px) {
    width: 100%;
  }
`;

export const TeacherTitle = styled.p`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 21px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const TeacherDescription = styled.p`
  font-size: 18px;
  @media only screen and (max-width: 1368px) {
    margin-bottom: 21px;
  }
`;

export const GuestsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-flow: row wrap;
  width: 80%;
  @media only screen and (max-width: 1368px) {
    width: 90%;
  }
`;

export const Guest = styled.div`
  width: 30%;
  padding: 15px;
  @media only screen and (max-width: 1368px) {
    width: 100%;
    padding: 0;
  }
`;

export const GuestImage = styled.img`
  width: 100%;
  @media only screen and (max-width: 1368px) {
    width: 100%;
  }
`;

export const GuestDescription = styled.p`
  font-size: 16px;
  @media only screen and (max-width: 1368px) {
    margin-bottom: 21px;
  }
`;

export const GuestName = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: 21px 0;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const BottomImage = styled.img`
  width: 100%;
  margin-top: 50px;
`;
