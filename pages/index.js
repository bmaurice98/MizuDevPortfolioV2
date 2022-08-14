import Head from "next/head";
import { useEffect, useState } from "react";
import { Main } from "../components";
import PreLoader from "../components/PreLoader";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);
  return (
    <>
      <Head>
        <title>MizuDev Personal</title>
        <meta name="description" content="My Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Main /> : <PreLoader />}
    </>
  );
}
