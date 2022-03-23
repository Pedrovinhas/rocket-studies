import styles from './styles.module.scss';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <header>
                <img src="/logo.svg" alt="Duas setas cruzadas com a ponta para mesma direção, uma seta cinza e outra vermelha e azul" />
                <h1> Não sabe o que assistir? </h1>
            </header>
        </div>
    )   
}