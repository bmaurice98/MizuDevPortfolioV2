import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {About, Blog, Main, Projects, Skills} from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MizuDev Personal</title>
        <meta name="description" content="My Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600&family=Pacifico&family=Source+Sans+Pro:wght@400;600;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>Dev Portfolio</main>
        
    </div>
  );
}
