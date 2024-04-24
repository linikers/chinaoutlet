import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: `#1976d2`
        },
        secondary: {
            main: '#dc004e',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: "100%",
                    backgroundColor: "#222222",
                    color: "#eeeeee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
                    border: "none",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                    fontWeight: "600",
                    transition: "all 0.5s ease",
                    "&:hover": {
                        cursor: "pointer",
                        backgroundColor: "#000000",
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    marginRight: "8px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                },
            },
        },
    },
});
