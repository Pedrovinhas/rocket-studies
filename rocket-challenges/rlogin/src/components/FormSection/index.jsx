import styles from "./styles.module.scss";

export default function FormSection() {
    return (
        <section className={styles.formSection}>
            <nav className={styles.navigation}>
                <img src="/logo.svg" alt="Imagem logo de uma cabana Camp-in" />
            </nav>
            <div className={styles.formContainer}>
                <form className={styles.loginForm} action="">
                    <div className={styles.title}>
                        <div>
                            <img src="log-in.svg" alt="" />
                            <h1> Faça seu login </h1>
                        </div>
                        <p> Entre com suas informações de cadastro.</p>
                    </div>
                    <label htmlFor=""> E-mail</label>
                    <div className={styles.inputs}>
                        <img src="mail.svg" alt="Email" />
                        <input type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <label htmlFor=""> Senha </label>
                    <div className={styles.inputs}>
                        <img src="lock.svg" alt="Cadeado" />
                        <input type="password"placeholder="Digite sua senha" />
                        <img src="eye.svg" alt="Olhos para ver a senha" />
                    </div>
                    <div className={styles.checkbox}>
                        <div>
                            <div className={styles.check}>
                                <input type="checkbox" />
                                <img src='check.svg' />
                                </div>
                            <label htmlFor=""> Lembre-me </label>
                        </div>
                        <span> Esqueci minha senha</span>
                    </div>
                    <button> Entrar </button>
                    <p> Não tem uma conta? <span> Registre-se</span></p>
                </form>
            </div>
        </section>
    )
} 