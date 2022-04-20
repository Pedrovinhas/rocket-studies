import { StyledSection, MainSection, StyledParagraph } from './styles'

export function MenuSection() {
    return (
      <StyledSection>
        <MainSection>
          <h1>
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
          </h1>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            facilis animi harum atque a obcaecati, tempore cum, libero voluptas
            fugit aperiam quaerat eveniet?
          </StyledParagraph>
          <p>
              <span> Veja mais </span>
              <span> <img src="arrow-right.svg" alt="Seta de encaminhar para outra página" /></span>
          </p>
        </MainSection>
        <div>
            <img src="featured-image.png" alt="Linhas de códigos" />
        </div>
      </StyledSection>
    );
  }