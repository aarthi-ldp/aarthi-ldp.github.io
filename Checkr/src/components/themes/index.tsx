import { createTheme } from '@mui/material/styles';
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1 : React.CSSProperties;
    h2 : React.CSSProperties;
    caption2 : React.CSSProperties;
    subtitle1 : React.CSSProperties;
    subtitle2 : React.CSSProperties;
    body1 : React.CSSProperties;
    body2 : React.CSSProperties;
  }

  interface TypographyVariantsOptions{
    h1 : React.CSSProperties;
    h2 : React.CSSProperties;
    caption2 : React.CSSProperties;
    subtitle1 : React.CSSProperties;
    subtitle2 : React.CSSProperties;
    body1 : React.CSSProperties;
    body2 : React.CSSProperties;
}

  interface Palette {
    structural: Palette["primary"];
    greyColors: Palette["primary"];
    accent: Palette["primary"];
    textColor: Palette["primary"];
  }

  interface PaletteOptions {
    structural?: PaletteOptions["primary"];
    greyColors?: PaletteOptions["primary"];
    accent?: PaletteOptions["primary"];
    textColor?: PaletteOptions["primary"];
}

interface Color{
    blue?: string;
    lightBlue?: string;
    green?: string;
    lightGreen?: string;
    yellow?: string;
    lightYellow?: string;
    white?: string;
    stroke?: string;
    iconLight?: string;
    iconDark?: string;
    primary50?: string;
    primary100?: string;
    primary300?: string;
    primary400?: string;
    primary500?: string;
    primary700?: string;
    primary800?: string;
    textWhite?: string;
    lowEmphasis?: string;
    mediumEmphasis?: string;
    highEmphasis?: string;
   
}

interface PaletteColor extends Color {

}
interface SimplePaletteColorOptions extends Color{
    
}
}

declare module "@mui/material/Typography" {

    interface TypograpghyPropsVariantOverrides {
        h1: true;
        h2: true;
        caption2: true;
    }
}

 const theme = createTheme({
    spacing: [0, 4, 8, 12, 16, 20, 24, 32],
     typography: {
        h1: {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "30px",
            textTransform: "none",
        },
        h2: {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "28px",
            },
        body1: {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",

        },
        body2: {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",

        },
        caption2: {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",

        },
        subtitle1: {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
        },
        subtitle2: {
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
        },
     },

     palette: {
        primary: {
            main: "#0B6D62",
            primary50: "#FAFAFC",
            primary100: "#F7F8FA",
            primary300: "#EFF2FF",
            primary400: "#95AAFF",
            primary500: "#224DFF",
            primary700: "#1132B7",
            primary800: "#FBFBFC",
            light: "#F7F7F7",
        },

        textColor: {
            main: "#000000",
            white: "FFFFFF",
            lowEmphasis: "#818287",
            mediumEmphasis: "#696A6E",
            highEmphasis: "#2C2C2E",
            light: "#fff",
        },

        structural: {
            main: "#FFFFFF",
            white: "#FFFFFF",
            stroke: "#E5E7ED",
            iconLight: "#696A6E",
            iconDark: "3E414D",
        },
        accent: {
            main: "#FFFFFF",
            blue: "#3E5FE2",
            lightBlue: "#F2F4FC",
            green: "#17A076",
            lightGreen: "#F2FCFB",
            yellow: "#A08817",
            lightYellow: "#FAF8EB",
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#22ADFF",
                    },
                    "& .MuiOutlinedInput-root:focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#22ADFF",
                    },

                },
            },
        },
    }
     });

     export default theme;




 





  

