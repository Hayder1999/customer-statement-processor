"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: true,
    // dark: true,
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    primary: {
      main: "#FD5B00",
      dark: "#A73A00",
      light: "#FFDBCE",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "rgba(215, 226, 255, 0.3)",
      paper: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
