import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    align-items: center;

   
    height: 80vh;
    background-color: var(--purple-bg);
    justify-content: center;

    margin-inline: auto;
    border-bottom: 6px solid var(--green);
`

export const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 35.625rem;
    height: 21.625rem;

    h1 {
        font-size: 36px;
        font-weight: 700;
        color: var(--button-bg);
        margin-bottom: 16px;
    }

    p {
        display: flex;
        font-size: 18px;
        
        span {
            color: var(--button-bg);
            font-weight: 700;
            font-size: 18px;

            &:first-child {
                margin-right: 8px;
            }
        }
        
        
    }

  
`

export const StyledParagraph = styled.p`
        width: 29.313rem;
        height: 5.125rem;
        color: var(--light-purple);
        margin-bottom: 16px;
 

`