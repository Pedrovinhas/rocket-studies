import { StyledSection, StyledMainPost, StyledOtherPosts } from './styles'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


export function PostSection() {

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
        <StyledMainPost
        animate={{ opacity: window.scrollY < 530 ? 0 : 1 }} 
        initial={{ opacity: 0 }}
        transition= {{ duration: 1 }}
        >
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
            <motion.div
            animate={{ opacity: window.scrollY < 530 ? 0 : 1 }} 
            initial={{ opacity: 0 }}
            transition= {{ duration: 2 }}
            >
                <span> Janeiro 04, 2022 </span>
                <h2> Conheça as principais técnicas para conseguir uma vata internacional em programação</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque rerum id. Perferendis optio autem doloribus adipisci aut voluptate, aperiam amet facilis itaque placeat eaque, alias rerum eius error labore!</p>
            </motion.div>
            <motion.div
            animate={{ opacity: window.scrollY < 530 ? 0 : 1 }} 
            initial={{ opacity: 0 }}
            transition= {{ duration: 2.5 }}
            >
            <span> Janeiro 04, 2022 </span>
                <h2> Veja a evolução no Front-end na prática</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque rerum id. Perferendis optio autem doloribus adipisci aut v </p>
            </motion.div>
        </StyledOtherPosts>
      </StyledSection>
    );
  }