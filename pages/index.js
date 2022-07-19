import Head from "next/head";
import { Main } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>MizuDev Personal</title>
        <meta name="description" content="My Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600&family=Pacifico&family=Source+Sans+Pro:wght@400;600;700&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
          crossOrigin="true"
        />
      </Head>

      <Main />
    </>
  );
}
