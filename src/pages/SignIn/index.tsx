import React, { useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos')
            });

            await schema.validate(data, {
                abortEarly: false
            });
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="goBarber"></img>
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password"></Input>

                    <Button type="submit">Entrar</Button>
                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <a href="login">
                    <FiLogIn />
                Criar conta
            </a>
            </Content>
            <Background />
        </Container>
    );
}

export default SignIn;
