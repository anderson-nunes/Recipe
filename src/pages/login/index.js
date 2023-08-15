import React, { useContext, useState } from 'react'
import { useForm } from '../../hooks'
import {
  CenteredPageContainer as LoginPageContainer,
  FormContainer, EmailInput, PasswordInput
} from '../../components'
import { validateEmail, validatePassword, Login } from '../../services'
import { Button } from '@chakra-ui/react'
import logo from '../../assets/logo.png'
import { goToSignupPage, goToFeedPage } from '../../routes'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RecipeContext } from '../../hooks/useRecipeContext'

export const LoginPage = () => {

  const { setIsLoggedIn } = useContext(RecipeContext)

  const navigate = useNavigate()

  const notify = () => toast.success('Sucesso!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    top: '1rem'
  })

  const notifyError = () => toast.error('Email não cadastrado!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

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
      setIsLoggedIn(true)
      notify()

    } catch (err) {
      console.log(err)
      notifyError()
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