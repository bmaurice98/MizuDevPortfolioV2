import { ThemeProvider } from "styled-components";
import { lightTheme, theme } from "../components/Themes";
import { ChakraProvider } from "@chakra-ui/react";
import Transition from "../components/Transition";
import "../styles/globals.css";
import "../styles/transition.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Transition>
      <ThemeProvider theme={lightTheme}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </Transition>
  );
}

export default MyApp;
