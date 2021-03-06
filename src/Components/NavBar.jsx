import React from 'react'
import styled from 'styled-components'
import logoImg from '../image/logo.svg'
import loginImg from '../image/sign.svg'

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`

const ImgLogo = styled.img`
  width: 50px;
`

const Login = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginImg = styled.img`
  max-width: 26.7px;
`

const LoginText = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin-top: 3px;
`

export const NavBar = () => (
    <>
      <NavBarStyled>
        <Logo>
          <ImgLogo src={logoImg} alt="logo"/>
          <H1>MrDonald's</H1>
        </Logo>
        <Login>
          <LoginImg src={loginImg} alt="login"/>
          <LoginText>войти</LoginText>
        </Login>
      </NavBarStyled>
    </>
)
