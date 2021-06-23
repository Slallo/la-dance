import {
  BackgroundWrapper,
  CTA,
  CTAText,
  CTARow,
  CTAButton,
  SectionTitle,
  StorySection,
  StoryTextWrapper,
  StoryText,
  StoryImage,
} from "./home.style";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import story from "../../assets/story_section_img.png";
const Home = () => {
  return (
    <>
      <BackgroundWrapper>
        <CTA>
          <Logo />
          <CTAText>
            Direzione Artistica <br /> <strong>Vittoria Maria Maglione</strong>{" "}
            e <strong>Caterina Ceravolo</strong>
          </CTAText>
          <CTARow>
            <CTAButton full="true">Formazione</CTAButton>
            <CTAButton>Compagnia</CTAButton>
          </CTARow>
        </CTA>
      </BackgroundWrapper>
      <StorySection>
        <StoryTextWrapper>
          <SectionTitle>La Storia</SectionTitle>
          <StoryText>
            L’Associazione denominata Associazione Italiana Divulgazione Danza
            “La Dance”, svolge attività in ambito promozionale, produttivo e
            formativo, operando sul territorio della provincia di Salerno, da
            oltre 50 anni, per lo sviluppo e la diffusione dell’arte della
            danza, ed ha ricevuto contributi da parte della Provincia di
            Salerno, del Comune di Battipaglia e dal 1999 anche dalla Regione
            Campania. <br />
            <br />
            L’Associazione “La Dance” è funzionante con presa d’atto del
            Ministero della Pubblica Istruzione dal 1983. La direzione Artistica
            è a cura di Maria Vittoria Maglione e Caterina Ceravolo. <br />{" "}
            <br />
            L’associazione attraverso spettacoli e rappresentazioni si prefigge
            lo scopo di divulgare l’arte della danza.
          </StoryText>
        </StoryTextWrapper>
        <StoryImage src={story}></StoryImage>
      </StorySection>
    </>
  );
};

export default Home;
