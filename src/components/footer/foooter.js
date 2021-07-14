import {
  FooterWrapper,
  FooterRow,
  FooterSection,
  FooterSectionLefted,
  FooterTitle,
  SocialIconsWrapper,
  FooterLogo,
  FooterInfo,
  FooterLink,
  Facebook,
  Instagram,
  Phone,
  Linkedin,
  Youtube,
  FooterAnchor,
} from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <FooterRow>
        <FooterSection>
          <FooterTitle>Info & Contatti</FooterTitle>
          <SocialIconsWrapper>
            <FooterAnchor
              href="https://www.facebook.com/ladance.mariavittoriamaglione/"
              noreferral
              target="_blank"
            >
              <Facebook />
            </FooterAnchor>

            <FooterAnchor
              href="https://www.instagram.com/ladance__/"
              noreferral
              target="_blank"
            >
              <Instagram />
            </FooterAnchor>
            <Linkedin />
            <Youtube />
            <FooterAnchor href="tel: 0828210155">
              <Phone />
            </FooterAnchor>
          </SocialIconsWrapper>
        </FooterSection>
        <FooterSectionLefted>
          <FooterLogo />
          <FooterInfo>
            <strong>Battipaglia</strong> 
            <br /> Piazza Ferrovia nr 12 <br />
            Via Ugo Foscolo 34/36 <br /> Tel 320 7086606 - 338 1064846
          </FooterInfo>
        </FooterSectionLefted>
      </FooterRow>
      <FooterRow style={{ justifyContent: "space-around", marginTop: 50 }}>
        <FooterLink to="/transparency">Trasparenza</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
      </FooterRow>
    </FooterWrapper>
  );
};

export default Footer;
