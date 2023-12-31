import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSpring, animated } from 'react-spring';
import * as S from './styles';
import { ModalProps } from './types';
import Alert from '../Alert';

export default function Modal({ showModal, isLogged }: ModalProps) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const loggedUser = 'teste@teste.com.br';
  const nameUser = 'Marcelo Moraes';
  const loggedPassword = '123456';

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    if (user === loggedUser && password === loggedPassword) {
      localStorage.setItem('Logged', 'isLogged');
      setAlert({ type: 'success', message: `Seja bem vindo ${nameUser} e boas compras!!!` });
      window.location.href = window.location.href;
    } else {
      setAlert({ type: 'error', message: 'Usuário não cadastrado' });
    }
  };

  const handleSignOut = () => {
    localStorage.setItem('Logged', '');
    setAlert({ type: 'success', message: 'Usuário desconectado, faça login para realizar as compras!' });
    window.location.href = window.location.href;
  };

  return (
    <>
      {showModal && (
        <animated.div style={animation}>
          <S.Login>
            <S.Heading>
              {isLogged ? (
                <S.Logged>
                  <h3>Bem vindo</h3>
                  <span>{nameUser}</span>
                  <button onClick={handleSignOut}>Sair</button>
                </S.Logged>
              ) : (
                <S.Loggouf>
                  <h3>Login</h3>
                  <div>
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      placeholder="Digite seu email..."
                      value={user}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="Password">Senha</label>
                    <input
                      type="password"
                      placeholder="Digite sua senha..."
                      value={password}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                  </div>

                  <button onClick={handleSignIn}>Entrar</button>
                </S.Loggouf>
              )}
            </S.Heading>
          </S.Login>
        </animated.div>
      )}
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}
    </>
  );
}
