'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./page.module.scss";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";

interface detailsProps {
  email: string;
  password: string;
  session: boolean;
}

export default function Authentication() {

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [details, setDetails] = useState<detailsProps>({
    email: "",
    password: "",
    session: false
  });

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDetails((prev) => ({ ...prev, [id]: value }))
  }

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(details);
  }

  const TypePassword = isVisible ? "password" : "text"
  const setIcon = isVisible ?
    <FaEye title="Mostrar senha" className={styles.eyeIcon} onClick={() => setIsVisible(!isVisible)} size={20} /> :
    <FaEyeSlash title="Esconder senha" className={styles.eyeIcon} onClick={() => setIsVisible(!isVisible)} size={20} />


  return (
    <main className={styles.mainContent}>
      <form onSubmit={HandleSubmit} className={styles.loginScreen}>
        <fieldset>

          <div className={styles.headerForm}>
            <h1>Login</h1>
            <span>Seja bem-vindo de volta!</span>
          </div>

          <div className={styles.boxInput}>
            <input onChange={HandleChange} type="email" id="email" required />
            <label htmlFor="email">Email</label>
            <span />
            <FaUser size={20} />
          </div>

          <div className={styles.boxInput}>
            <input onChange={HandleChange} type={TypePassword} id="password" required />
            <label htmlFor="password">Senha</label>
            <span />
            <FaLock size={20} />
            {setIcon}
          </div>

          <div className={styles.boxSection}>
            <div className={styles.forgotBox} >
              <input type="checkbox" id="forgot" />
              <label htmlFor="forgot">Lembrar senha ?</label>
            </div>
            <Link href="">
              Esqueceu sua senha ?
            </Link>
          </div>

          <button className={styles.btnForm} onClick={() => signIn()} type="submit">
            Login
          </button>
        </fieldset>

        <div className={styles.boxDivision}>
          <hr />
          <span>ou</span>
          <hr />
        </div>

        <section className={styles.BoxSocialMedia}>
          <div className={styles.boxGoogle} onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/dashboard/home' })} >
            <FcGoogle size={32} />
            <span>Google</span>
          </div>
          <div onClick={() => signIn("instagram", { callbackUrl: 'http://localhost:3000/dashboard' })}>
            <FaInstagram size={32} />
            <span>Instagram</span>
          </div>
        </section>



      </form>
    </main>
  );
}
