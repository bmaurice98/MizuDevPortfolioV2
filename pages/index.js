import Head from "next/head";
import { Main } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>MizuDev Personal</title>
        <meta name="description" content="My Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
