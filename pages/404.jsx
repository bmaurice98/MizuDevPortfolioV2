import Head from "next/head";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 10000);
  });
  return (
    <>
      <Head>
        <title>Error Page</title>
        <meta name="description" content="MizuDev | Error" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-[72vh] text-center justify-center items-center text-white text-5xl">
        <h1>Oops...</h1>
        <h2>This page cannot be found</h2>
        <p>
          Return{" "}
          <Link href="/">
            <a className="text-blue-400 underline">Home</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Error;
