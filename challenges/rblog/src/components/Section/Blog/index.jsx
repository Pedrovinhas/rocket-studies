import { GridSection, GridChild } from './styles'
import { useState, useEffect } from 'react'

export function BlogSection() {
  const [shouldShowActions, setShouldShowActions] = useState(false)

  const [lastYPos, setLastYPos] = useState(0)

  useEffect(() => {

    function handleScroll() {
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYPos
      console.log(scrollY)

      setShouldShowActions(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])

  return (
   
    <GridSection>
      <GridChild 
      animate={{ opacity: window.scrollY < 814 ? 0 : 1 }} 
      initial={{ opacity: 0 }}
      transition= {{ duration: 1 }}
      >
        <img src="post-2.png" alt="Imagem do Blog" />
        <span > Janeiro 04, 2022</span>
        <h3> 10 dicas para conseguir a vaga desejada </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic atque
          eius odio, repudiandae unde, neque fugiat nemo, cupiditate consectetur
          
        </p>
      </GridChild>
      <GridChild animate={{ opacity:  window.scrollY < 814 ? 0 : 1 }} initial={{ opacity: 0 }} transition= {{ duration: 2 }}>
        <img src="post-3.png" alt="Imagem do Blog" />
        <span> Janeiro 04, 2022</span>
        <h3> Deixe seu código mais semântico com essas dicas </h3>
        <p>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic atque
          eius odio, repudiandae unde, neque fugiat nemo, cupiditate consectetur
        
        </p>
      </GridChild>
      <GridChild animate={{ opacity:  window.scrollY < 814 ? 0 : 1 }} initial={{ opacity: 0 }} transition= {{ duration: 3 }}>
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