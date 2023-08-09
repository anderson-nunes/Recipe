import React, { useState } from 'react'
import { useForm } from '../../hooks'
import {
  CenteredPageContainer as SignupPageContainer,
  FormContainer, EmailInput, PasswordInput, NameInput
} from '../../components'
import { validateEmail } from '../../constants'
import { validatePassword } from '../../constants'
import { validateName } from '../../constants'
import { goToFeedPage } from '../../routes'
import { useNavigate } from 'react-router-dom'
import { Signup } from '../../constants'
import { Button } from '@chakra-ui/react'
import logo from '../../assets/logo.png'

export const SignupPage = () => {

  const navigate = useNavigate()

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: "",
    name: ""
  })

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isNameValid, setIsNameValid] = useState(true)


  const onSubmit = async (e) => {
    e.preventDefault()
    setIsEmailValid(validateEmail(form.email))
    setIsPasswordValid(validatePassword(form.password))
    setIsNameValid(validateName(form.name))

    try {
      const { token } = isNameValid && isEmailValid && isPasswordValid && await Signup({
        name: form.name,
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
    <SignupPageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <img src={logo} alt='logo receitas' />
          <NameInput
            value={form.name}
            onChange={onChangeInputs}
            isValid={isNameValid}
          />
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
            Cadastrar
          </Button>
        </form>
      </FormContainer>
    </SignupPageContainer>
  )
}