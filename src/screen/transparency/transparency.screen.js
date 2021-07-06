import {
  PageWrapper,
  BackgroundWrapper,
  PageTitle,
} from "./transparency.style";
import curriculum from "../../assets/curriculum_sorrentino.pdf";
const Transparency = () => {
  return (
    <PageWrapper>
      <BackgroundWrapper>
        <PageTitle>Trasparenza</PageTitle>
      </BackgroundWrapper>
      <div>
        <a href={curriculum} target="_blank" rel="noreferrer">
          Curriculum Sorrentino
        </a>
      </div>
    </PageWrapper>
  );
};

export default Transparency;
