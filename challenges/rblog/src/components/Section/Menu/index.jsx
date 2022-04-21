import { StyledSection, MainSection, StyledParagraph } from './styles'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function MenuSection() {
  const [lastYPos, setLastYPos] = useState(0)

  useEffect(() => {

    function handleScroll() {
      const yPos = window.scrollY
      console.log(scrollY)
      setLastYPos(yPos)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [lastYPos])
    return (
      <StyledSection>
        <MainSection>
          <motion.h1 
          animate={{ opacity: window.scrollY > 500 ? 0 : 1 }} 
          initial={{ opacity: 0 }}
          transition= {{ duration: 1 }}>
            Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
          </motion.h1>
          <StyledParagraph 
          animate={{ opacity: window.scrollY > 500 ? 0 : 1 }} 
          initial={{ opacity: 0 }} 
          transition= {{ duration: 3 }}
          >
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