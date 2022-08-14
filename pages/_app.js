import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes";
import Transition from "../components/Transition";
import "../styles/globals.css";
import "../styles/transition.css";
import "tailwindcss/tailwind.css";
import PreLoader from "../components/PreLoader";

function MyApp({ Component, pageProps }) {
  return (
    <Transition>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Transition>
  );
}

export default MyApp;
