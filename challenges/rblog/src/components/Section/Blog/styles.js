import styled from 'styled-components'
import { motion } from 'framer-motion' 

export const GridSection = styled.section`
    display: grid;
    place-items: center;
   

    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 370px);
    gap: 30px;

    background-color: var(--white);

    height: 600px;

    align-items: center;
    justify-content: center;
     

`

export const GridChild = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
   
    
    height: 458px;
    
`