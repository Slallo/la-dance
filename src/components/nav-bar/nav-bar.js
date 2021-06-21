import { NavBarWrapper, NavBarLink, NavBarButton } from "./nav-bar.style";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLink to="/">Home</NavBarLink>
      <NavBarLink to="/corsi">Corsi</NavBarLink>
      <NavBarLink to="/insegnanti">Insegnanti</NavBarLink>
      <NavBarButton to="/contatti">Contatti</NavBarButton>
    </NavBarWrapper>
  );
};

export default NavBar;
