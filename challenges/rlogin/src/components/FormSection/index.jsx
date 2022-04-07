import styles from "./styles.module.scss";
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userSchema } from '../../validation/validationSchema'

export default function FormSection() {

    const [passwordShown, setPasswordShown] = useState(false)


    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
    })


    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <section className={styles.formSection}>
            <nav className={styles.navigation}>
                <img src="/logo.svg" alt="Imagem logo de uma cabana Camp-in" />
            </nav>
            <div className={styles.formContainer}>
                <form
                    className={styles.loginForm}
                    action=""
                    onSubmit={handleSubmit(submitForm)}>
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
                        <input
                            type="text"
                            name="email"
                            placeholder="Digite seu e-mail"
                            {...register('email')}
                        />
                      
                       
                    </div>
                    <p className={styles.error}>{errors.email?.message && 'Por favor, insira um e-mail válido'} </p>
                    <label htmlFor=""> Senha </label>
                    <div className={styles.inputs}>
                        <img src="lock.svg" alt="Cadeado" />
                        <input
                            type={passwordShown ? "text" : "password"}
                            placeholder="Digite sua senha"
                            name="password"
                            {...register('password')}
                        />
                       
                          
                        <img
                            className={styles.password}
                            onClick={togglePassword}
                            src="eye.svg"
                            alt="Olhos para ver a senha" />
                    </div>
                    <p className={styles.error}>{errors.password?.message && 'A senha deve ter entre 6 a 12 dígitos'} </p>
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