import {
  PageWrapper,
  BackgroundWrapper,
  PageTitle,
  ContentWrapper,
  Section,
  Divider,
  List,
  ListElement,
  CurriculumLink,
  LogoWrapper,
  Logo,
} from "./transparency.style";
import { LinearGradient } from "../home/home.style";
import curriculum_sorrentino from "../../assets/curriculum_sorrentino.pdf";
import curriculum_maglione from "../../assets/curriculum_maglione.pdf";
import { ReactComponent as PlusIcon } from "../../assets/+.svg";
import logo from "../../assets/logo_ministero.png";

const Transparency = () => {
  return (
    <PageWrapper>
      <BackgroundWrapper>
        <PageTitle>Trasparenza</PageTitle>
      </BackgroundWrapper>
      <LinearGradient>
        <ContentWrapper>
          <Section>
            “La Dance” - Associazione Italiana Divulgazione Danza è stata
            costituita con atto del notaio Dott. Gaetano Di Fluri il 10 giugno
            1986. <br /> La presidenza è affidata a Augusta Galzenati. <br /> La
            Direzione Artistica a cura di Maria Vittoria Maglione. <br />
            <br /> L’esercizio delle cariche è svolto a titolo gratuito. <br />{" "}
            <br /> Ai sensi dell’art. 1, comma 125 e 127 della Legge 124 del 4
            agosto 2017, si attesta che per l’anno 2018 all’Associazione La
            Dance, sono stati assegnati i seguenti contributi:
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONTRIBUTO 2019
              <ListElement>
                Regione Campania attività di promozione € 6.448,52
              </ListElement>
              <ListElement>
                Regione Campania art.6 lettera H: € 10.083,23
              </ListElement>
            </List>
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONTRIBUTO 2020
              <ListElement>
                Regione Campania attività di produzione € 5.000,00
              </ListElement>
              <ListElement>
                Regione Campania art.6 lettera H: € 15.027,79
              </ListElement>
              <ListElement>
                Ministero dei Beni e delle Attività Culturali “Contributo fondo
                emergenza COVID Danza” D.M. 23 Aprile 2020 € 10.000,00
              </ListElement>
            </List>
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONTRIBUTO 2021
              <ListElement>
                Ministero dei Beni e delle Attività Culturali “Contributo fondo
                emergenza COVID Danza” D.M. 8 dicembre 2020 € 10.000,00
              </ListElement>
            </List>
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONTRIBUTO 2021
              <ListElement>
                Regione Campania art. 6 lettera G: € 9.738,01
              </ListElement>
              <ListElement>
                Regione Campania art.8 prima istanza produzione: € 5.000,00
              </ListElement>
            </List>
          </Section>
         
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONSULENTI:
              <ListElement>STUDIO DOTT. GIANLUCA SORRENTINO</ListElement>
            </List>
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONTRIBUTO 2022
              <ListElement>
                Regione Campania art. 6 lettera G: € 13.164,62
              </ListElement>
              <ListElement>
                Regione Campania art.8 prima istanza produzione: € 5.469,71
              </ListElement>
            </List>
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONSULENTI:
              <ListElement>STUDIO DOTT. GIANLUCA SORRENTINO</ListElement>
            </List>
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONTRIBUTO 2023
              <ListElement>
                Regione Campania istanza n.394 € 8.673,23
              </ListElement>
              <ListElement>
                Regione Campania istanza n.393: €7.194,42
              </ListElement>
            </List>
          </Section>
          <Divider />
          <Section>
            <PlusIcon />
            <List>
              CONTRIBUTO 2024
              <ListElement>
                Regione Campania istana n.749: € 8.177,57
              </ListElement>
              <ListElement>
                Regione Campania istanza n.744: € 4.666,57
              </ListElement>
            </List>
          </Section>
          <Section>
            <PlusIcon />
            <List>
              CURRICULA:
              <ListElement>
                <CurriculumLink
                  href={curriculum_maglione}
                  target="_blank"
                  rel="noreferrer"
                >
                  MARIA VITTORIA MAGLIONE
                </CurriculumLink>
              </ListElement>
              <ListElement>
                <CurriculumLink
                  href={curriculum_sorrentino}
                  target="_blank"
                  rel="noreferrer"
                >
                  GIANLUCA SORRENTINO
                </CurriculumLink>
              </ListElement>
            </List>
          </Section>
        </ContentWrapper>
      </LinearGradient>
      <LogoWrapper>
        <Logo src={logo} />
      </LogoWrapper>
    </PageWrapper>
  );
};

export default Transparency;
