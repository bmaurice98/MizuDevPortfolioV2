import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, theme } from "../components/Themes";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
