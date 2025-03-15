import React, {ElementRef, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Button } from "../../../components/Button.tsx";
import { Container } from "../../../components/Container.tsx";
import { style } from './Contacts_styles.tsx';
import {Modal} from "./Modal.tsx";

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const [modal,setModal] = useState(false)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_f0kli9k', 'template_uk34rmq', form.current, {
                publicKey: 'rlfjpugbTrN7kqIwc',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        const formElement = e.target as HTMLFormElement;
        setModal(true)
        setTimeout(()=>{setModal(false)},2000)
        formElement.reset();
    };
    //
    // const handleModal = ()=>{
    //     setModal(true)
    //     setTimeout(()=>{setModal(false)},500)
    // }

    return (
        <style.ContactsStyled id={'Contact'}>
            <Container>
                <SectionTitle><span>Contacts</span></SectionTitle>
                <style.FormStyled ref={form} onSubmit={sendEmail}>
                    <style.Field  required={true} placeholder={'name'} name={'user_name'} />
                    <style.Field required={true} placeholder={'subject'} name={'subject'} />
                    <style.Field  required={true} placeholder={'email'} type={'email'} name={'email'} />
                    <style.Field  required={true} as={'textarea'} placeholder={'message'} name={'message'} />
                    <Button type={'submit'} >Send Message</Button>
                    <Modal modal={modal}/>
                </style.FormStyled>

            </Container>
        </style.ContactsStyled>
    );
};