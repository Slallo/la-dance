import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as twitter } from "../../assets/twitter.svg";
import { ReactComponent as facebook } from "../../assets/facebook.svg";
import { ReactComponent as linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as phone } from "../../assets/phone.svg";
import { ReactComponent as youtube } from "../../assets/youtube.svg";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-flow: column wrap;
  color: #3d3d3d;
  background: radial-gradient(
    at top,
    #f3dbd3,
    rgba(217, 129, 99, 0.5),
    rgba(217, 129, 99, 0.8)
  );
  padding: 30px 0;
`;

export const FooterRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-flow: row wrap;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const FooterSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-flow: column wrap;
  min-width: 350px;
`;

export const FooterSectionLefted = styled(FooterSection)`
  align-items: flex-start;
  @media only screen and (max-width: 716px) {
    align-items: center;
  }
`;

export const SocialIconsWrapper = styled.div`
  width: 90%;
  max-width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  flex-flow: row nowrap;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    width: 80%;
    margin-top: 10px;
  }
`;

export const Twitter = styled(twitter)`
  @media only screen and (max-width: 600px) {
    width: 32px;
  }
`;

export const Facebook = styled(facebook)`
  @media only screen and (max-width: 600px) {
    width: 32px;
  }
`;

export const Linkedin = styled(linkedin)`
  @media only screen and (max-width: 600px) {
    width: 32px;
  }
`;

export const Phone = styled(phone)`
  @media only screen and (max-width: 600px) {
    width: 32px;
  }
`;

export const Youtube = styled(youtube)`
  @media only screen and (max-width: 600px) {
    width: 32px;
  }
`;

export const FooterTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  border-bottom: 3px solid #fbfbfb;
  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FooterLogo = styled(Logo)`
  path {
    fill: #3d3d3d;
  }
  width: 180px;
`;

export const FooterInfo = styled.div`
  @media only screen and (max-width: 716px) {
    text-align: center;
  }
`;

export const FooterLink = styled(Link)`
  color: #5f5f5f;
  font-weight: bold;
  font-size: 16px;
`;

export const FooterAnchor = styled.a`
  height: 48px;
  display: contents;
  @media only screen and (max-width: 600px) {
    height: 32px;
  }
`;
