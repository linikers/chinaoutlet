import { createTheme } from "@mui/material";

export const theme = createTheme({

  palette: {
    primary: {
      main: "#007b33",
      dark: "#00562c",
      light: "#60a384",
    },
    secondary: {
      main: "#6c757d",
      dark: "#4e524f",
      light: "#8d908e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#878787",
    },
  },
  spacing: 20,
  
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 360,
          height: 480,
          padding:"16px",
          margin: "20px",
          "@media scren ans (min-width: 768px": {
            margin: "20px",
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "none",
          outline: "none",
          // backgroundColor: "#007b33",
          color: "#ffffff",
          fontWeight: 500,
          padding: "10px 20px",
          borderRadius: 4,
          "&:hover": {
            backgroundColor: "#00562c",
          },
          "&:focus": {
            outline: "none"
          }
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          border: "none",
          "&:focus": {
            outline: "none",
          }
        }
      }
    }
  },
});
