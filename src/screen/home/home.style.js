import styled from "styled-components";
import img from "../../assets/home-background.png";
import { Link } from "react-router-dom";

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

export const LinearGradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(243, 219, 211, 1) 80%
  );
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
  text-shadow: 0px 0px 3px black;
  margin: 15px 0;
  @media only screen and (max-width: 500px) {
    width: 70%;
  }
`;

export const CTARow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const CTAButton = styled(Link)`
  text-align: center;
  background: ${(p) => (p.full ? "#d98163" : "none")};
  outline: none;
  border: 3px solid #d98163;
  text-decoration: none;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  max-width: 45%;
`;

export const SectionTitle = styled.span`
  font-size: 45px;
  border-bottom: 3px solid #f5ccbd;
  color: #3d3d3d;
  width: fit-content;
  font-weight: bold;
`;

export const StoryTextWrapper = styled.div`
  flex: 1;
  min-width: 40%;
`;

export const StorySection = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 30px;
  box-sizing: border-box;
  flex-flow: row wrap;
  @media only screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;

export const StoryText = styled.p`
  margin-top: 60px;
  padding-right: 20px;
  @media only screen and (max-width: 600px) {
    margin: 20px 0;
    padding-right: 0;
  }
`;

export const StoryImage = styled.img`
  max-width: 100%;
  flex: 1;
`;

export const CoursesSection = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 30px;
  box-sizing: border-box;
  flex-flow: column wrap;
  @media only screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 80%;
  margin: 15px 0;
`;

export const CoursesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const CourseCard = styled(Link)`
  width: 30%;
  margin: 10px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    min-width: 100%;
  }
  @media only screen and (max-width: 900px) {
    width: 45%;
  }
  text-decoration: none;
`;

export const CourseImage = styled.div`
  height: 235px;
  background: ${(p) => (p.background ? `url(${p.background})` : "black")};
  background-size: cover;
  margin-bottom: 15px;
`;

export const CourseName = styled.p`
  font-weight: bold;
  color: #3d3d3d;
  margin-bottom: 0;
`;

export const EventsSection = styled(CoursesSection)`
  width: 100%;
  padding: 0;
`;

export const EventsImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const EventsRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: 25px 0;
`;

export const PastEventsWrapper = styled.ol`
  flex: 1;
  min-width: 250px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0;
`;

export const Event = styled.li`
  list-style: circle;
  margin: 10px 0;
`;

export const SeeMore = styled(Link)`
  text-align: center;
  background: white;
  outline: none;
  color: #3e3e3e;
  border: 2px solid #3e3e3e;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  max-width: 45%;
  margin-top: 50px;
`;
