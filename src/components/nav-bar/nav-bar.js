import { useState, useEffect } from "react";
import { NavBarWrapper, NavBarLink, NavBarButton } from "./nav-bar.style";
import { useLocation } from "react-router";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  let location = useLocation();
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset > 0 ? true : false);
    };
  }, []);
  return (
    <NavBarWrapper isTransparent={!isScrolled}>
      <NavBarLink
        isTransparent={!isScrolled}
        selected={location.pathname === "/"}
        to="/"
      >
        Home
      </NavBarLink>
      <NavBarLink
        isTransparent={!isScrolled}
        selected={location.pathname === "/corsi"}
        to="/corsi"
      >
        Corsi
      </NavBarLink>
      <NavBarLink
        isTransparent={!isScrolled}
        selected={location.pathname === "/insegnanti"}
        to="/insegnanti"
      >
        Insegnanti
      </NavBarLink>
      <NavBarButton href="#footer">Contatti</NavBarButton>
    </NavBarWrapper>
  );
};

export default NavBar;
