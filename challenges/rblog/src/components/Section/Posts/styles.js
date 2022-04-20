import styled from 'styled-components'

export const StyledSection = styled.section`
   background-color: var(--white);         
   height: 646px;

   display: flex;
   align-items: center;
   justify-content: center;

   gap: 130px;

`
export const StyledMainPost = styled.div`
   display: flex;
   flex-direction: column;
    
    
   width: 569px;
   align-items: flex-start;

   img {
      margin-bottom: 16px;
   }

   span {
      margin-bottom: 16px;
   }

   h2 {
      margin-bottom: 16px;
   }
`

export const StyledOtherPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    
   
    width: 472px;

    height: 514px;

    div:first-child {
       height: 252px;
       border-bottom: 1px solid #F2E7FA;
       margin-bottom: 48px;
    }

   span {
      margin-bottom: 8px;
   }

   h2 {
      margin-bottom: 8px;
   }

`