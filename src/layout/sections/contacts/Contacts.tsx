import React from 'react';


import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/theme.tsx";
export const Contacts = () => {
    return (
<ContactsStyled>
    <Container>
<SectionTitle><span>Contacts</span></SectionTitle>
    <FormStyled>
    <Field placeholder={'name'}/>
        <Field placeholder={'surname'}/>
        <Field as={'textarea'} placeholder={'message'}/>
        <Button type={'submit'}>Send Message</Button>
    </FormStyled>
    </Container>
</ContactsStyled>
    );
};

const ContactsStyled = styled.section``
const FormStyled = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    textarea {
        height: 155px;
    }
`
const Field = styled.input.attrs(({placeholder})=>({
    placeholder: placeholder|| 'name'
}))`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    resize: none;
    padding: 7px 15px;
    letter-spacing: 0.05em;
    color: ${theme.colors.textColor};
    font-family: "Poppins", sans-serif;;
    &::placeholder{
        color: #495057;
    text-transform: capitalize;
    }
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
    
`