import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarWrapper = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  transition: all 1s ease;
  background-color: ${(p) =>
    p.isTransparent ? "transparent" : "rgba(217,129,99,0.8)"};
  padding-right: 5vw;
  box-sizing: border-box;
  font-size: 21px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    padding: 0 10px;
    justify-content: center;
  }
`;

export const NavBarLink = styled(Link)`
  color: white;
  text-decoration: none;
  outline: 0;
  font-weight: bold;
  margin: 0 18px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 0px 3px black;
  text-decoration: ${(p) =>
    p.selected && (p.isTransparent ? "none" : "underline")};
  background: ${(p) => (p.selected && p.isTransparent ? "#d98163" : "none")};
  height: 50%;
  padding: 0 10px;
  max-width: 120px;
  @media only screen and (max-width: 600px) {
    margin: 0 10px;
    padding: 0 5px;
  }
`;

export const NavBarButton = styled(NavBarLink)`
  background: ${(p) => (p.selected ? "#d98163" : "none")};
`;
