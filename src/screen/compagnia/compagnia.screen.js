import {
  PageWrapper,
  BackgroundWrapper,
  PageTitle,
  Description,
  ImagesWrapper,
  ShowupImage,
  Legami,
} from "./compagnia.style";
import showup from "../../assets/showup.png";
import legami from "../../assets/legami.png";

const Company = () => {
  return (
    <PageWrapper>
      <BackgroundWrapper>
        <PageTitle>Compagnia</PageTitle>
      </BackgroundWrapper>
      <Description>
        La compagnia di danza denominata “La Dance Company” è stata fondata nel
        2018. Lo scopo della compagnia è quello di riunire dei giovani
        danzatori, offrendogli la possibilità di aumentare il loro bagaglio
        artistico, proiettandoli in un percorso professionale. L’intento è
        quello di creare un’alternativa lavorativa sul territorio, portando la
        compagnia con i suoi spettacoli sia a livello regionale che non.
        Sensibilizzare il pubblico, avvicinandolo allo spettacolo dal vivo è tra
        gli obiettivi principali della compagnia.
      </Description>
      <ImagesWrapper>
        <ShowupImage src={showup} />
        <Legami src={legami} />
      </ImagesWrapper>
    </PageWrapper>
  );
};

export default Company;
