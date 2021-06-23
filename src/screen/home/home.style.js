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
    margin-top: 20px;
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
  padding: 100px 30px;
  box-sizing: border-box;
  flex-flow: column wrap;
  @media only screen and (max-width: 600px) {
    padding: 50px 20px;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 80%;
`;

export const CoursesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const CourseCard = styled.div`
  flex: 1;
  min-width: 344px;
  margin: 10px;
  cursor: pointer;
`;

export const CourseImage = styled.div`
  height: 235px;
  background: ${(p) => (p.background ? `url(${p.background})` : "black")};
  background-size: cover;
`;

export const CourseName = styled.p`
  font-weight: bold;
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
  min-width: 300px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0;
`;

export const Event = styled.li`
  list-style: circle;
  margin: 10px 0;
`;
