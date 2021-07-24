import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import * as S from "./styled";

const Login = () => {
  const history = useHistory()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handlerUserData = (e) => {
    e.preventDefault();
    if (!email.length) 
       setEmailErrorMessage("email obrigatório");
    
    if (!password.length) 
       setPasswordErrorMessage("senha obrigatória");

    if(emailErrorMessage || passwordErrorMessage){
        return 
    }
    const data = {
      password,
      email,
    };
    localStorage.setItem(
      "@hiringCoders-e-commerce-userData",
      JSON.stringify(data)
    );

    history.push('/home')
  };

  return (
    <>
      <S.Container>
        <S.SubContainer>
          <S.Form id="contactForm" onSubmit={handlerUserData}>
            <S.InputWrapper>
              <S.Label for="email">Email</S.Label>
              <S.Input
                id="email"
                type="text"
                placeholder="Email *"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.length && emailErrorMessage) {
                    setEmailErrorMessage("");
                  }
                }}
              />
              {emailErrorMessage ? (
                <S.ErrorMessage>{emailErrorMessage}</S.ErrorMessage>
              ) : null}
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Label for="password">Senha</S.Label>
              <S.Input
                id="password"
                type="password"
                placeholder="Senha *"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value.length && passwordErrorMessage) {
                    setPasswordErrorMessage("");
                  }
                }}
              />

              {passwordErrorMessage ? (
                <S.ErrorMessage>{passwordErrorMessage}</S.ErrorMessage>
              ) : null}
            </S.InputWrapper>

            <S.Button
              className="btn btn-primary btn-xl text-uppercase disabled"
              id="submitButton"
              type="submit"
            >
              Entrar
            </S.Button>
          </S.Form>
        </S.SubContainer>
      </S.Container>
    </>
  );
};

export default Login;
