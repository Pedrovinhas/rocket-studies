import styled from "styled-components";

export const StyledHeader = styled.header`
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        max-width: 1440px;
        height: 20vh;

        margin: 0 auto;

        
`

export const NavMenu = styled.nav`
    ul {
        display: flex;
        list-style: none;
        color: var(--white);

        li {
            font-size: 18px;
            margin-right: 32px;
            cursor: pointer;
           padding: 2px;
            transition: ease-in-out 0.3s;

            &:hover {
                font-weight: 500;
                border-left: 2px solid var(--green);
            }
        }
    }

`

export const StyledInput = styled.div`
   

    width: 18.75rem;
    height: 2.75rem;
   
 
    display: flex;

    input {
        background-color: var(--dark-bg);
        border: none;

        padding: 22px;
        
        color: var(--white);
        border-radius: 4px 0px 0px 4px;

        &::placeholder {
            color: var(--white);
        }
    }

    button {
        width: 20%;
        display: flex;
        align-items:center;
        justify-content: center;
        background-color: var(--button-bg);
        cursor: pointer;
        border: none;
        border-radius: 0px 4px 4px 0px;
        
    }

`