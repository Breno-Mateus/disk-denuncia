import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fff;
        font-family: "Roboto", sans-serif;
    }

    body{
        background: linear-gradient(90deg, #3a6073, #324a63, #283747);
    }
`