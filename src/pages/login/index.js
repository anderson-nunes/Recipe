import React, { useState } from 'react'
import { useForm } from '../../hooks'
import {
  CenteredPageContainer as LoginPageContainer,
  FormContainer, EmailInput, PasswordInput
} from '../../components'
import { validateEmail } from '../../constants'
import { validatePassword } from '../../constants'
import { Button } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { goToSignupPage, goToFeedPage } from '../../routes'
import { useNavigate } from 'react-router-dom'
import { Login } from '../../constants'

export const LoginPage = () => {

  const navigate = useNavigate()

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
  })

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsEmailValid(validateEmail(form.email))
    setIsPasswordValid(validatePassword(form.password))

    try {
      const { token } = isEmailValid && isPasswordValid && await Login({
        email: form.email,
        password: form.password
      })
      localStorage.setItem('cookenu.token', token)
      goToFeedPage(navigate)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <LoginPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt='logo receitas' />
          <EmailInput
            value={form.email}
            onChange={onChangeInputs}
            isValid={isEmailValid}
          />
          <PasswordInput
            value={form.password}
            onChange={onChangeInputs}
            isValid={isPasswordValid}
          />
          <Button
            type='submit'
            w={'100%'}
            bg={'orange.400'}
            color={'white'}
            variant="form">
            Enviar
          </Button>
          <Button
            onClick={() => goToSignupPage(navigate)}
            type='submit'
            w={'100%'}
            bg={'white'}
            color={'black'}
            textDecoration={'underline'}
            margin={'0.5rem 0'}
            variant="form">
            Não possui conta? Cadastrar
          </Button>
        </form>
      </FormContainer>
    </LoginPageContainer>
  )
}