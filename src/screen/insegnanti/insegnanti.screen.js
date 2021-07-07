import {
  PageWrapper,
  BackgroundWrapper,
  PageTitle,
  TeacherWrapper,
  TeacherInfo,
  TeacherImage,
  TeacherTitle,
  TeacherDescription,
  GuestsWrapper,
  Guest,
  GuestImage,
  GuestDescription,
  GuestName,
  BottomImage,
} from "./insegnanti.style";
import { LinearGradient } from "../home/home.style";
import viglione from "../../assets/viglione.png";
import ceravolo from "../../assets/ceravolo.png";
import decamillis from "../../assets/decamillis.png";
import atzewi from "../../assets/atzewi.png";
import sica from "../../assets/sica.png";
import goodson from "../../assets/goodson.png";
import scardacchi from "../../assets/scardacchi.png";
import marchant from "../../assets/marchant.png";
import liguori from "../../assets/liguori.png";
import teacher_bottom_image from "../../assets/teacher_section_image.png";
const Teachers = () => {
  return (
    <PageWrapper>
      <BackgroundWrapper>
        <PageTitle>Insegnanti</PageTitle>
      </BackgroundWrapper>
      <LinearGradient>
        <TeacherWrapper>
          <TeacherInfo>
            <TeacherTitle>Maria Vittoria Maglione</TeacherTitle>
            <TeacherDescription>
              Maria Vittoria Maglione, diplomata c/o il Centro Studi Danze
              Classiche di Valeria Lombardi nel 1972, consegue, nel 1982,
              l’abilitazione all’insegnamento della danza presso l’Accademia
              Nazionale di Danza a Roma. Collabora con Valeria Lombardi dal 1968
              al 1980 in qualità di insegnante e come assistente coreografa. Fa
              inoltre parte della Stabile Napoletana ricoprendo ruoli di
              Ballerina Solista esibendosi nei maggiori Teatri Italiani (T.
              Argentina e T. Brancaccio di Roma, T. Politeama di Napoli, T.
              Verdi di Salerno, ed ancora ad Avellino, Benevento, Minori,
              Amalfi, Pescara, Nuoro, Frosinone, Latina…..). Partecipa ad alcuni
              spettacoli per la RAI con Carla Fracci, Paolo Bortoluzzi, Alfredo
              Kolner. Si perfeziona con i migliori maestri sia in Italia che
              all’estero (in Russia, Parigi, Londra, Copenaghen, Cannes …) per
              arricchire sempre più la tecnica e perfezionarne lo stile. Come
              coreografa oltre alla fedele ricostruzione di pagine di
              repertorio, lavora alla creazione di balletti inediti anche per
              spettacoli e manifestazioni nell’ambito provinciale e regionale,
              nonché alla realizzazione di coreografie per il mondo
              dell’infanzia.
            </TeacherDescription>
          </TeacherInfo>
          <TeacherImage src={viglione} />
        </TeacherWrapper>
        <TeacherWrapper isReverse>
          <TeacherInfo isReverse>
            <TeacherTitle>Caterina Ceravolo</TeacherTitle>
            <TeacherDescription>
              Si è diplomata nel 1988 ed ha perfezionato i suoi studi con
              maestri internazionali quali Margarita Trayanova, Anna Maria
              Prima, Sauche Prijkof, Kirk Offerle, Celia Southern, Salaorni, A.
              Borriello, M. Ermini. Ha frequentato il corso di tecnica di
              propedeutica alla danza tenuto dalla prof.ssa Laura Fanetti. Si è
              dedicata all’insegnamento della danza classica, dopo essersi
              arricchita professionalmente seguendo per numerosi anni i corsi di
              “Tecnica della Danza e di Repertorio del Balletto Classico” tenuti
              da Margarita Trayanova. Nel corso degli anni è divenuta assistente
              di maestri come: Mario Piazza, Alex Atzewi, Angela Abbigliati.
            </TeacherDescription>
          </TeacherInfo>
          <TeacherImage src={ceravolo} />
        </TeacherWrapper>
        <TeacherWrapper>
          <TeacherInfo>
            <TeacherTitle>Angela de Camillis</TeacherTitle>
            <TeacherDescription>
              Si è diplomata nel 1993 ed ha rifinito i suoi studi con numerosi
              maestri, tra cui Celia Southern, Stefano Forti (coreografi RAI),
              Silvio Oddi (ballerino-coreografo Mediaset) e Bill Goodson,
              coreografo internazionale. Si dedica con passione all’insegnamento
              della danza moderna, ricercando sempre nuovi spunti di lavoro e
              apprendimento, sia dal punto di vista prettamente tecnico, come il
              potenziamento muscolare, sia dal punto di vista coreografico e
              artistico, adattandosi con grande elasticità a vari stili, dal
              Modern puro all’Hip-hop. Negli ultimi anni si é specializzata
              nella  Contact Improvvisation per ampliare e ricercare diverse
              possibilità espressive,  di comunicazione e di gestualità.
            </TeacherDescription>
          </TeacherInfo>
          <TeacherImage src={decamillis} />
        </TeacherWrapper>
        <PageTitle style={{ color: "#3D3D3D", marginBottom: 50 }}>
          Maestri ospiti
        </PageTitle>
        <GuestsWrapper>
          <Guest>
            <GuestImage src={atzewi} />
            <GuestName>Alex Atzewi</GuestName>
            <GuestDescription>
              Coreografo contemporaneo di fama internazionale, formatosi a New
              York, ha danzato con i Momix, attualmente crea coreografie nei
              maggiori teatri in Francia, Germania e Olanda
            </GuestDescription>
          </Guest>
          <Guest>
            <GuestImage src={sica} />
            <GuestName>Salvatore Sica</GuestName>
            <GuestDescription>
              Ha studiato e ballato con coreografi di fama internazionale. Ha
              partecipato come ballerino all’evento “Domino” a Roma con le
              coreografie di “Flaminia Genovese”. Coreografo del progetto
              “Giovanni Talenti” di Luigi Ferrone presso il teatro Giuseppe
              Verdi, per due anni consecutivi. Lavora con diverse scuole in
              Campania come coreografo e ballerino ospite.
            </GuestDescription>
          </Guest>
          <Guest>
            <GuestImage src={goodson} />
            <GuestName>Bill Goodson</GuestName>
            <GuestDescription>
              Coreografo americano, ha lavorato con Micheal Jackson, Diana Ross,
              Gloria Estefan, Stevie Wonder, per la televisione italiana con
              Giorgio Panarello, Renato Zero, Lucio Dalla, Chiambretti Night.
            </GuestDescription>
          </Guest>
          <Guest>
            <GuestImage src={scardacchi} />
            <GuestName>Massimiliano Scardacchi</GuestName>
            <GuestDescription>
              Laureato all’accademia Nazionale di Danza, si è perfezionato con
              G. Cohen, V, N. Viroubuva, K. Damianov; primo ballerino della
              compagnia “Città di Ravenna”, ha approfondito lo stile
              bournonvilliano con i fratelli Flindt e quello americano con David
              Howard.
            </GuestDescription>
          </Guest>
          <Guest>
            <GuestImage src={marchant} />
            <GuestName>Christiane Marchant</GuestName>
            <GuestDescription>
              Attualmente insegnante e coordinatrice artistica della European
              School of Ballet di Amsterdam. Con lei approfondiremo lo studio
              della danza classica attraverso la sua lunga esperienza di
              ballerina e maestra di ballo delle compagnie tra le più
              importanti.
            </GuestDescription>
          </Guest>
          <Guest>
            <GuestImage src={liguori} />
            <GuestName>Simone Liguori</GuestName>
            <GuestDescription>
              Si perfeziona con maestri di fama internazionale per quanto
              riguarda il classico contemporaneo e moderno. Partecipa alla
              realizzazione del film “Balla che ti passa” e alla realizzazione
              di una puntata della fiction “Don Matteo 5”, e all’opera lirica
              “La Traviata” presso il teatro “Giuseppe Verdi” di Salerno.
              Collabora con scuole e compagnie della campania come insegnante,
              artista ospite e coreografo.
            </GuestDescription>
          </Guest>
        </GuestsWrapper>
        <BottomImage src={teacher_bottom_image} />
      </LinearGradient>
    </PageWrapper>
  );
};

export default Teachers;
