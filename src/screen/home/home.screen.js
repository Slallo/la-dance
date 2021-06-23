import {
  BackgroundWrapper,
  CTA,
  CTAText,
  CTARow,
  CTAButton,
} from "./home.style";
import { ReactComponent as Logo } from "../../assets/logo.svg";
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
      <div>
        <ul>
          <li>Ciao</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
