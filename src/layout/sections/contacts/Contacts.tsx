import React from 'react';
import {StyledSections} from "../../../components/StyledSections.tsx";

import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
export const Contacts = () => {
    return (
<StyledSections>
<SectionTitle>Contacts</SectionTitle>
    <FormStyled>
    <Field placeholder={'name'}/>
        <Field placeholder={'surname'}/>
        <Field as={'textarea'} placeholder={'message'}/>
        <Button type={'submit'}>Send Message</Button>
    </FormStyled>
</StyledSections>
    );
};


const FormStyled = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Field = styled.input.attrs(({placeholder})=>({
    placeholder: placeholder|| 'name'
}))`
    background-color: #252527;
    border: 1px solid #4a4a4a;
    resize:none;
    text-align: center;
   color: white;
`