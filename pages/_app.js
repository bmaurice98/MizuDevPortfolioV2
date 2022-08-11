import { ThemeProvider } from "styled-components";
import { lightTheme, theme } from "../components/Themes";
import { ChakraProvider } from "@chakra-ui/react";
import { useLocation } from "../hooks/useLocation";
import { Socials } from "../components/Socials";
import { LogoComponent } from "../components/LogoComponent";
import { HomeButton } from "../components/HomeButton";
import Transition from "../components/Transition";
import "../styles/globals.css";
import "../styles/transition.css";

function MyApp({ Component, pageProps }) {
  const location = useLocation();
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
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
