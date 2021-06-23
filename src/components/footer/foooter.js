import {
  FooterWrapper,
  FooterRow,
  FooterSection,
  FooterTitle,
  SocialIconsWrapper,
  FooterLogo,
  FooterInfo,
  FooterLink,
  Facebook,
  Twitter,
  Phone,
  Linkedin,
  Youtube,
} from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRow>
        <FooterSection>
          <FooterTitle>Info & Contatti</FooterTitle>
          <SocialIconsWrapper>
            <Facebook />
            <Twitter />
            <Linkedin />
            <Youtube />
            <Phone />
          </SocialIconsWrapper>
        </FooterSection>
        <FooterSection>
          <FooterLogo />
          <FooterInfo>
            <strong>Battipaglia</strong> 
            <br /> Piazza Ferrovia nr 12 <br /> Tel 0828210155 <br />
            Via Ugo Foscolo 34/36 <br /> Tel 320 7086606 - 338 1064846
          </FooterInfo>
        </FooterSection>
      </FooterRow>
      <FooterRow style={{ justifyContent: "space-around", marginTop: 50 }}>
        <FooterLink>Trasparenza</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
      </FooterRow>
    </FooterWrapper>
  );
};

export default Footer;
