import { Button, ButtonProps, ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
import { theme } from "../../theme";
import React from "react";
// import theme from "./theme"


interface BtnProps extends ButtonProps {
    starIcon?: React.ReactNode
}

export const CustomBtn: React.FC<BtnProps> = ({ children, starIcon, ...rest }) => {

    return (
        <ThemeProvider theme={theme}>

            <Button {...rest}>
                {starIcon && <span>{starIcon}</span>}
                {children}
            </Button>
        </ThemeProvider>
    )
}