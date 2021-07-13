import {
  BackgroundWrapper,
  LinearGradient,
  CTA,
  CTAText,
  CTARow,
  CTAButton,
  SectionTitle,
  StorySection,
  StoryTextWrapper,
  StoryText,
  StoryImage,
  CoursesSection,
  SectionSubtitle,
  CoursesWrapper,
  CourseCard,
  CourseImage,
  CourseName,
  EventsSection,
  EventsImage,
  EventsRow,
  PastEventsWrapper,
  Event,
  SeeMore,
} from "./home.style";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import story from "../../assets/story_section_img.png";
import propedeutica from "../../assets/propedeutica.png";
import classico from "../../assets/classico.png";
import contemporaneo from "../../assets/contemporaneo.png";
import moderno from "../../assets/moderno.png";
import hiphop from "../../assets/hiphop.png";
import videodance from "../../assets/videodance.png";
import events from "../../assets/events_section_image.png";

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
            <CTAButton full="true" to="/corsi">
              Formazione
            </CTAButton>
            <CTAButton to="/compagnia">Compagnia</CTAButton>
          </CTARow>
        </CTA>
      </BackgroundWrapper>
      <LinearGradient>
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
              Ministero della Pubblica Istruzione dal 1983. La direzione
              Artistica è a cura di Maria Vittoria Maglione e Caterina Ceravolo.{" "}
              <br /> <br />
              L’associazione attraverso spettacoli e rappresentazioni si
              prefigge lo scopo di divulgare l’arte della danza.
            </StoryText>
          </StoryTextWrapper>
          <StoryImage src={story}></StoryImage>
        </StorySection>
        <CoursesSection>
          <SectionTitle>Corsi</SectionTitle>
          <SectionSubtitle>
            “Quando non puoi danzare tu, fai danzare la tua anima…”
          </SectionSubtitle>
          <CoursesWrapper>
            <CourseCard to="/corsi#propedeutica">
              <CourseImage background={propedeutica} />
              <CourseName>Propedeutica</CourseName>
            </CourseCard>
            <CourseCard to="/corsi#classica">
              <CourseImage background={classico} />
              <CourseName>Repertorio Classico</CourseName>
            </CourseCard>
            <CourseCard to="/corsi#contemporaneo">
              <CourseImage background={contemporaneo} />
              <CourseName>Contemporanea</CourseName>
            </CourseCard>
            <CourseCard to="/corsi#moderno">
              <CourseImage background={moderno} />
              <CourseName>Moderno</CourseName>
            </CourseCard>
            <CourseCard to="/corsi#hiphop">
              <CourseImage background={hiphop} />
              <CourseName>Hip Hop</CourseName>
            </CourseCard>
            <CourseCard to="/corsi#videodance">
              <CourseImage background={videodance} />
              <CourseName>Video Dance</CourseName>
            </CourseCard>
          </CoursesWrapper>
          <SeeMore to="/corsi">Scopri di più</SeeMore>
        </CoursesSection>
        <EventsSection>
          <SectionTitle style={{ borderColor: "white" }}>Eventi</SectionTitle>
          <SectionSubtitle>
            Alcune delle partecipazioni più importanti avvenute nei 50 anni di
            storia di “La Dance”
          </SectionSubtitle>
          <EventsImage src={events} />
          <div
            style={{
              background: "white",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EventsRow>
              <PastEventsWrapper>
                <Event>
                  Spettacoli-Notte Magica presentato da Pippo Baudo prodotto
                  dalla RAI
                </Event>
                <Event>
                  La Notte delle Streghe programma RAI con Oreste Lionello
                </Event>
                <Event>Uno Mattina e Telethon</Event>
                <Event>Carramba che Sorpresa</Event>
                <Event>Partecipazioni per il Giffoni Film Festival</Event>
                <Event>
                  Esibizione ai teatri Parioli ed Orione per Una Sera a Teatro
                </Event>
                <Event>
                  Celebrazione al teatro Bellini di Napoli: Cento Anni di Totò
                </Event>
              </PastEventsWrapper>
              <PastEventsWrapper>
                <Event>
                  La Gatta Cenerentola registrati per la televisione tedesca
                </Event>
                <Event>Partecipazione alla manifestazione Gusta Minori; </Event>
                <Event>
                  Vincitrice al concorso “Scarpetta d’oro” a Verona presentato
                  da Eva Grimaldi.
                </Event>
                <Event>
                  Spettacolo di Balletti ad Agropoli per “THEATRON”;
                </Event>
                <Event>
                  Vincitrice al concorso “Gran Prix De La Dance” Caivano (NA)
                </Event>
                <Event>
                  Vincitrice al concorso “Talenti in Danza” a Salerno
                </Event>
              </PastEventsWrapper>
            </EventsRow>
          </div>
        </EventsSection>
      </LinearGradient>
    </>
  );
};

export default Home;
