import styled from 'styled-components'

export const StyledMain = styled.main`
    width: 50vw;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    
    margin-left: 3.6rem;

`

export const StyledHeader = styled.header`
 
   width: 100%;

    img {
     
        margin-top: 5rem;
        width: 50%;
    }

`

export const StyledNews = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 100%;

    margin-top: 9.2rem;
    height: 15rem;
    font-family: var(--font-2);


    h1 {
        font-size: 3rem;
        color: var(--title-color);

    }

    p {
        
        font-family: var(--font-1);
        font-size: 1.6rem;
        font-weight: 700;
        color: var( --text-color)
    }

    span {
       
        font-family: var(--font-1);
        font-size: 1.6rem;
        color: #FFFFFF;
        font-weight: 400;

    }
`

export const StyledSubscription = styled.div`
   width: 100%;
   margin-top: 5rem;
   z-index: 1;

 
   display: flex;
   flex-direction: column;
   justify-content:space-between;
   height: 13rem;

   span {
       color: #A8A8A8;
       font-weight: 700;
       font-size: 1.8rem;
       font-family: var(--font-1);
   }
   div {
     height: 7rem;
     width: 110%;
     background-color: white;
     display: flex;
     

      input {
          width: 100%;
          height: 100%;
          font-size: 2rem;
          padding: 2rem;
          font-family: var(--font-1);
         
    
          box-shadow: none;
          border: none;
          border-left: .8rem solid var(--title-color);
          transition: .2s ease-in-out;
         &:focus {
             
             border: .2rem solid var(--title-color);
         }
      }

      button {
          border: none;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-button-color);
          transition: .2s ease-in-out;
          &:hover {
              background-color:  #825ee1;

          }

          cursor: pointer;
          
      }
   }
`

export const StyledContinue = styled.div`
    color: var(--bg-button-color);
    display: flex;
    width: 100%;
    margin-top: 5rem;

    p {
        font-family: var(--font-1);
        font-size: 1.8rem;
        font-weight: 700;
        margin-right: .8rem;
    }

    img {
        font-size: 2rem;
        cursor: pointer;
    }
`