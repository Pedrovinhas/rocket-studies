import { StyledSection, StyledMainPost, StyledOtherPosts } from './styles'

export function PostSection() {
    return (
      <StyledSection>
        <StyledMainPost>
          <img src="post-1.png" alt="Imagem de um computador com linhas de código" />
          <span> Janeiro 04, 2022</span>
          <h2> Começando no ReactJS em 2022</h2>
          <p>
        
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            impedit necessitatibus incidunt ducimus dignissimos qui eius, velit
            deleniti ab ratione voluptatibus reprehenderit, est modi aperiam omnis
            eum. Odio, eaque necessitatibus.
          </p>
        </StyledMainPost>
        <StyledOtherPosts>
            <div>
                <span> Janeiro 04, 2022 </span>
                <h2> Conheça as principais técnicas para conseguir uma vata internacional em programação</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque rerum id. Perferendis optio autem doloribus adipisci aut voluptate, aperiam amet facilis itaque placeat eaque, alias rerum eius error labore!</p>
            </div>
            <div>
            <span> Janeiro 04, 2022 </span>
                <h2> Veja a evolução no Front-end na prática</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque rerum id. Perferendis optio autem doloribus adipisci aut v </p>
            </div>
        </StyledOtherPosts>
      </StyledSection>
    );
  }