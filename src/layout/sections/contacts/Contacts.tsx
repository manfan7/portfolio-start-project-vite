import React from 'react';



import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {style} from './Contacts_styles.tsx'

export const Contacts:React.FC = () => {
    return (
        <style.ContactsStyled id={'Contact'}>
            <Container>
                <SectionTitle><span>Contacts</span></SectionTitle>
                <style.FormStyled>
                    <style.Field placeholder={'name'}/>
                    <style.Field placeholder={'surname'}/>
                    <style.Field as={'textarea'} placeholder={'message'}/>
                    <Button type={'submit'}>Send Message</Button>
                </style.FormStyled>
            </Container>
        </style.ContactsStyled>
    );
};

