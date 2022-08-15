import React from "react";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes";
import Transition from "../components/Transition";
import "../styles/globals.css";
import "../styles/transition.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Brandon Maurice"
        openGraph={{
          type: "website",
          locale: "en_IE",
          description: "The personal website for Brandon Maurice, developer.",
          site_name: "Brandon Maurice | devmizu.tech",
          images: [],
        }}
      />
      <Transition>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Transition>
    </>
  );
}

export default MyApp;
