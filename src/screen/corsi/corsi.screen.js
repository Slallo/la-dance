import {
  PageWrapper,
  BackgroundWrapper,
  PageTitle,
  CourseWrapper,
  CourseImage,
  CourseDescription,
  CourseTitle,
  CourseInfo,
} from "./corsi.style";
import { BottomImage } from "../insegnanti/insegnanti.style";
import { LinearGradient } from "../home/home.style";
import propedeutica from "../../assets/propedeutica_full.png";
import moderno from "../../assets/moderno_full.png";
import classico from "../../assets/classica_full.png";
import contemporaneo from "../../assets/contemporaneo_full.png";
import hiphop from "../../assets/hiphop_full.png";
import videodance from "../../assets/videodance_full.png";
import courses_bottom_image from "../../assets/courses_bottom_image.png";

const Courses = () => {
  return (
    <PageWrapper>
      <BackgroundWrapper>
        <PageTitle>Corsi</PageTitle>
      </BackgroundWrapper>
      <LinearGradient>
        <CourseWrapper>
          <CourseInfo>
            <CourseTitle>Propedeutica</CourseTitle>
            <CourseDescription>
              Il corso è pensato per i bambini dai 3 ai 7 anni appassionati di
              danza. Tutti i bambini saranno coinvolti in esercizi travolgenti
              svolti sotto forma di gioco così da far avvicinare ed appassionare
              i piccoli a questa disciplina. L’utilizzo degli oggetti sarà la
              base di partenza per il nostro percorso.
            </CourseDescription>
          </CourseInfo>
          <CourseImage src={propedeutica} />
        </CourseWrapper>
        <CourseWrapper isReverse>
          <CourseInfo isReverse>
            <CourseTitle>Danza Classica e Repertorio</CourseTitle>
            <CourseDescription>
              Lo studio della danza classica rappresenta il linguaggio basilare
              per affrontare qualsiasi disciplina legata alla danza, è suddiviso
              in otto corsi (i primi tre si dividono in liberi e regolari).  Il
              nostro Centro segue  il metodo della grande Agrippina Vaganova,
              (ballerina e Direttrice didattica alla Scuola Coreografica di
              Leningrado dal 1921 al 1957), in vigore presso l’Accademia
              Nazionale di Danza di Roma, con riferimenti anche alle tre
              grandi scuole: italiana, francese e americana. I Corsi di Danza
              Classica si suddividono in: inferiori, medi e superiori. Il
              repertorio classico costituisce il bagaglio culturale che ogni
              buon danzatore deve possedere, anche perché esso risulta
              indispensabile per sostenere audizioni e concorsi.
            </CourseDescription>
          </CourseInfo>
          <CourseImage src={classico} />
        </CourseWrapper>
        <CourseWrapper>
          <CourseInfo>
            <CourseTitle>Contemporaneo</CourseTitle>
            <CourseDescription>
              È una tecnica in grado di ampliare gli orizzonti espressivi ed
              individuali del danzatore, particolare importanza viene data alla
              tecnica Cunningam e Release. Gli allievi hanno la possibilità di
              studiare con maestri di fama internazionale e coreografi di
              rinomate compagnie di Danza Contemporanea.
            </CourseDescription>
          </CourseInfo>
          <CourseImage src={contemporaneo} />
        </CourseWrapper>
        <CourseWrapper isReverse>
          <CourseInfo isReverse>
            <CourseTitle>Moderno</CourseTitle>
            <CourseDescription>
              La danza modern ha origini recenti e si distingue per i molteplici
              stili che nel corso del tempo vari coreografi hanno sperimentato.
              È proprio nella sperimentazione di nuove gestualità che il modern
              trova terreno fertile ed è proprio in questa continua ricerca che
              esso supera i confini della danza accademica. Con lo studio di
              varie tecniche, in primo luogo quella classica, la creazione di
              coreografie e la ricerca di continui spunti gestuali e non
              consueti rende il modern uno stile molto particolare e in continua
              evoluzione. Il corso è adatto anche per i bambini e si suddivide
              nelle classi: Inferiore, Medio e Superiore.
            </CourseDescription>
          </CourseInfo>
          <CourseImage src={moderno} />
        </CourseWrapper>
        <CourseWrapper>
          <CourseInfo>
            <CourseTitle>Hip hop</CourseTitle>
            <CourseDescription>
              L’Hip-Hop crea uno spazio dove poter socializzare, sfogarsi,
              divertirsi, condividere emozioni. Aiuta inoltre a vincere la
              timidezza e a superare i propri limiti, migliora il senso del
              ritmo e dello spazio, la coordinazione, il tempo di reazione e la
              consapevolezza della propria corporeità. L’obiettivo del corso è
              quello di avvicinare gli allievi ad una vera e propria cultura che
              è quella dell’Hip-Hop, attraverso la danza , la musica e le
              nozioni storiche.
            </CourseDescription>
          </CourseInfo>
          <CourseImage src={hiphop} />
        </CourseWrapper>
        <CourseWrapper isReverse>
          <CourseInfo isReverse>
            <CourseTitle>Video Dance</CourseTitle>
            <CourseDescription>
              La Videodance è uno stile di danza che riprende i suoi elementi
              fondamentali dall’hip hop e dal jazz, sviluppando le sue
              coreografie principalmente su musica pop e commerciale.
              L’espressività è fondamentale, se pensiamo che questo genere nasce
              proprio con l’obiettivo di danza davanti ad una telecamera. Il
              nome stesso infatti, “Video-dance” lascia intuire il legame di
              questa disciplina con i video musicali.
            </CourseDescription>
          </CourseInfo>
          <CourseImage src={videodance} />
        </CourseWrapper>
        <BottomImage src={courses_bottom_image} />
      </LinearGradient>
    </PageWrapper>
  );
};

export default Courses;
