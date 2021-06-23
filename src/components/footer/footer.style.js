import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-flow: column wrap;
  color: #3d3d3d;
  background: radial-gradient(
    at bottom,
    #f3dbd3,
    rgba(217, 129, 99, 0.5),
    rgba(217, 129, 99, 0.6)
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
  min-width: 400px;
`;

export const SocialIconsWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  flex-flow: row nowrap;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    width: 80%;
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

export const FooterInfo = styled.div``;

export const FooterLink = styled(Link)`
  color: #5f5f5f;
  font-weight: bold;
  font-size: 16px;
`;
