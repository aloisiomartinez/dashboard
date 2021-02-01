import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import * as S from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt='Minha Carteira' />
        <h2>Minha Carteira</h2>
      </S.Logo>

      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar</S.FormTitle>

        <Input type='email' placeholder='e-mail' required onChange={e => setEmail(e.target.value)} />
        <Input type='password' placeholder='senha' required onChange={e => setPassword(e.target.value)} />

        <Button type='submit'>Acessar</Button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
