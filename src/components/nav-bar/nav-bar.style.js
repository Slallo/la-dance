import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as nav_logo } from "../../assets/nav_logo.svg";
import { ReactComponent as hambuerger } from "../../assets/hamburger.svg";

export const NavBarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  transition: all 0.5s ease;
  background-color: ${(p) =>
    p.isTransparent ? "transparent" : "rgba(255,255,255,1)"};
  padding-right: 5vw;
  box-sizing: border-box;
  font-size: 21px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 0 10px;
    justify-content: center;
  }
`;

export const NavBarRow = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 0 10px;
    justify-content: center;
  }
`;

export const NavBarLink = styled(Link)`
  color: ${(p) => (p.isTransparent ? "white" : "unset")};
  text-decoration: none;
  outline: 0;
  font-weight: bold;
  margin: 0 18px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: ${(p) => p.selected && "underline"};
  text-decoration-color: #d98163;
  //background: ${(p) => (p.selected && p.isTransparent ? "#d98163" : "none")};
  height: 50%;
  padding: 0 10px;
  max-width: 120px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavBarButton = styled.div`
  color: white;
  text-decoration: none;
  outline: 0;
  font-weight: bold;
  margin: 0 18px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 50%;
  padding: 0 10px;
  background: #d98163;
  max-width: 120px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavBarLogo = styled(nav_logo)`
  position: absolute;
  left: 2vw;
  @media only screen and (max-width: 600px) {
    transform: scale(0.7);
    left: 0px;
  }
`;

export const Hamburger = styled(hambuerger)`
  display: none;
  line {
    stroke: ${(p) => p.isWhite && "white"};
  }
  @media only screen and (max-width: 600px) {
    display: block;
    position: absolute;
    right: 5vw;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease;
`;

export const MobileMenu = styled.div`
  position: fixed;
  right: 0;
  z-index: 3;
  background: rgba(255, 255, 255, 1);
  transition: all 0.5s ease;
  width: ${(p) => (p.isOpen ? "60vw" : "0px")};
  height: ${(p) => (p.isOpen ? "60vh" : "0px")};
  padding: ${(p) => (p.isOpen ? "40px" : "0px")};
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const MobileLink = styled(NavBarLink)`
  @media only screen and (max-width: 600px) {
    display: block;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
  }
`;

export const NavBarMobileButton = styled(NavBarButton)`
  @media only screen and (max-width: 600px) {
    display: block;
    height: auto;
    background: none;
    font-size: 21px;
    color: unset;
  }
`;
