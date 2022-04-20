import { GridSection, GridChild } from './styles'

export function BlogSection() {
  return (
    <GridSection>
      <GridChild>
        <img src="post-2.png" alt="Imagem do Blog" />
        <span> Janeiro 04, 2022</span>
        <h3> 10 dicas para conseguir a vaga desejada </h3>
        <p>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic atque
          eius odio, repudiandae unde, neque fugiat nemo, cupiditate consectetur
          
        </p>
      </GridChild>
      <GridChild>
        <img src="post-3.png" alt="Imagem do Blog" />
        <span> Janeiro 04, 2022</span>
        <h3> Deixe seu código mais semântico com essas dicas </h3>
        <p>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic atque
          eius odio, repudiandae unde, neque fugiat nemo, cupiditate consectetur
        
        </p>
      </GridChild>
      <GridChild>
        <img src="post-4.png" alt="Imagem do Blog" />
        <span> Janeiro 04, 2022</span>
        <h3> Use essas dicas nas suas aplicações mobile </h3>
        <p>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic atque
          eius odio, repudiandae unde, neque fugiat nemo, cupiditate consectetur
        
        </p>
      </GridChild>
    </GridSection>
  );
}