import {createGlobalStyle} from "styled-components";
import {theme} from "./theme.tsx";

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {

        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    body {
        color: ${theme.colors.textColor};


        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
section:nth-of-type(odd){
    background-color: ${theme.colors.primaryBg};
}
section:nth-of-type(even){
        background-color: ${theme.colors.secondaryBg}
    ;
    }



`