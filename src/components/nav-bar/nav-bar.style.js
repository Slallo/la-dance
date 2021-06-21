import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarWrapper = styled.nav`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;
  background-color: transparent;
  padding-right: 5vw;
  box-sizing: border-box;
`;

export const NavBarLink = styled(Link)`
  color: white;
  text-decoration: none;
  outline: 0;
  font-size: 21px;
  font-weight: bold;
  margin: 0 18px;
  display: flex;
  align-items: center;
`;

export const NavBarButton = styled(NavBarLink)`
  background: #d98163;
  padding: 10px 20px;
`;
