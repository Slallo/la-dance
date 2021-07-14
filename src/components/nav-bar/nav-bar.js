import { useState, useEffect } from "react";
import {
  NavBarWrapper,
  NavBarLink,
  NavBarButton,
  NavBarLogo,
  Hamburger,
  Modal,
  MobileMenu,
  MobileLink,
  NavBarMobileButton,
} from "./nav-bar.style";
import { useLocation } from "react-router";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset > 0 ? true : false);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleClick = (e) => {
    setIsOpen(false);
  };
  const handleButtonClick = (e) => {
    let footer = document.getElementById("footer");
    console.log(footer);
    footer.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };
  return (
    <>
      <NavBarWrapper isTransparent={!isScrolled}>
        {(location.pathname !== "/" || isScrolled) && <NavBarLogo />}
        <Hamburger isWhite={!isScrolled} onClick={() => setIsOpen(!isOpen)} />
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
        <NavBarButton onClick={() => handleButtonClick()}>
          Contatti
        </NavBarButton>
      </NavBarWrapper>
      {isOpen && <Modal onClick={() => setIsOpen(false)}></Modal>}
      <MobileMenu isOpen={isOpen}>
        {isOpen && (
          <>
            <MobileLink
              onClick={(e) => handleClick(e)}
              selected={location.pathname === "/"}
              to="/"
            >
              Home
            </MobileLink>
            <MobileLink
              onClick={(e) => handleClick(e)}
              selected={location.pathname === "/corsi"}
              to="/corsi"
            >
              Corsi
            </MobileLink>
            <MobileLink
              onClick={(e) => handleClick(e)}
              selected={location.pathname === "/insegnanti"}
              to="/insegnanti"
            >
              Insegnanti
            </MobileLink>
            <NavBarMobileButton onClick={(e) => handleButtonClick(e)}>
              Contatti
            </NavBarMobileButton>
          </>
        )}
      </MobileMenu>
    </>
  );
};

export default NavBar;
