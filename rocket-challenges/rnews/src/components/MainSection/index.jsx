import { StyledMain, StyledHeader, StyledNews, StyledSubscription, StyledContinue } from './styles'

export default function MainSection() {
    return (
        <StyledMain>
            <StyledHeader>
                <img src="logo.svg" alt="Imagem de um astronauta lúdico roxo e branco segurando um jornal" />
            </StyledHeader>
            <StyledNews>
                <h1>atualize ideias e informações em 5 minutos. </h1>
                <p>tudo que você precisa saber para começar seu dia bem e informado</p>
                <span>noticias sobre o universo Rocketseat, e tudo o que precisa para começar o dia melhor.
                    perfeito para se preparar para codar ☕</span>
            </StyledNews>
            <StyledSubscription>
                <span>
                    Insira seu e-mail   
                </span>

                <div>
                <input placeholder="oi@rocketseat.com" type="e-mail" />
                <button>
                    <img src="send.svg" alt="Envio de e-mail" />
                </button>
                </div>
            </StyledSubscription>
            <StyledContinue>
                <p> Deixe-me ler primeiro</p>
                <img src="arrow-right.svg" alt="Seta para ir para outra página" />
            </StyledContinue>
        </StyledMain>
    )
}