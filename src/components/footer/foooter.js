import {
  FooterWrapper,
  FooterRow,
  FooterSection,
  FooterTitle,
  SocialIconsWrapper,
  FooterLogo,
  FooterInfo,
  FooterLink,
} from "./footer.style";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";

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
            <br /> Piazza Ferrovia nr 12  Tel 0828210155 <br />
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
