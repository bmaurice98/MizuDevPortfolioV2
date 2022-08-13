import { extendTheme } from "@chakra-ui/react";

export const lightTheme = {
  body: "#77C9D4", //Feather blue
  text: "#000000", //Black
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "119,201,212",
  textRgba: "0,0,0",
};

export const darkTheme = {
  body: "#015249", //Forest Green
  text: "#77C9D4", //Feather blue
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "1,82,73",
  textRgba: "165, 165, 175",
};

export const theme = extendTheme({
  colors: {
    feather: "#77C9D4",
    forest_Green: "#015249",
    sleek_Gray: "#A5A5Af",
    marine: "#57BC90",
  },
});

/*
Feather: #77C9D4
Forest Green: #015249
Sleek Gray: #A5A5Af
Marine: #57BC90
*/
