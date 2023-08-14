import React from 'react'
import { HeaderStyled, ContainerButton } from './styled'
import { Button } from '@chakra-ui/react'
import { goToFeedPage, goToLoginPage, goToAddRecipePage } from '../../routes'
import { useNavigate } from 'react-router-dom'

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {

  const navigate = useNavigate()

  const buttonAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem("cookenu.token")
      setIsLoggedIn(false)
    }
    goToLoginPage(navigate)
  }

  const onClickAddButton = () => {
    goToAddRecipePage(navigate)
  }

  const buttonText = isLoggedIn ? "Logout" : "Login"

  return (
    <HeaderStyled>
      <Button onClick={() => goToFeedPage(navigate)} variant="header">Cookenu</Button>
      <ContainerButton>
        <Button onClick={() => onClickAddButton()} variant="header">Adicionar Receita</Button>
        <Button onClick={buttonAction} variant="header">{buttonText}</Button>
      </ContainerButton>
    </HeaderStyled>

  )
}

