import styled from "styled-components";
import {theme} from "../../../styles/theme.tsx";

const ContactsStyled = styled.section`
    h2 {
        margin-bottom: 90px;
    }
`

const FormStyled = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    margin: 0 auto;

    textarea {
        height: 155px;
    }
`
const Field = styled.input.attrs(({placeholder}) => ({
    placeholder: placeholder || 'name'
}))`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    resize: none;
    padding: 7px 15px;
    letter-spacing: 0.05em;
    color: ${theme.colors.textColor};
    font-family: "Poppins", sans-serif;;

    &::placeholder {
        color: #495057;
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }

`
export const style = {
ContactsStyled,FormStyled,Field
}