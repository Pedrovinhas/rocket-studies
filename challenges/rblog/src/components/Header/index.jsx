import { StyledHeader, NavMenu, StyledInput } from './styles'

export function Header() {

    return (
        <StyledHeader>
            <div>
                <img src="logo.svg" alt="The Blog Logo" />
            </div>
            <NavMenu>
                <ul>
                    <li>Home</li>
                    <li> Sobre</li>
                    <li> Categorias</li>
                    <li> Contato</li>
                </ul>
            </NavMenu>
            <StyledInput>
                <input type="text" placeholder="Buscar" />
                <button type="button">    <img src="search.svg" alt="Pesquisar" /> </button>
            </StyledInput>

        </StyledHeader>
    )
}