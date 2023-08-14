import React, { useEffect, useState } from 'react'
import { useForm, useProtectedPage } from '../../hooks'
import {
  CenteredPageContainer as AddRecipePageContainer,
  FormContainer, DescriptionTextArea, ImageInput, TitleInput
} from '../../components'
import { validateName } from '../../constants'
import { AddRecipe } from '../../constants'
import { Button, Textarea } from '@chakra-ui/react'
import { PageTitleStyled } from './styled'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const AddRecipePage = () => {

  const [form, onChangeInputs, clearInputs] = useForm({
    description: "",
    title: "",
    imageUrl: ""
  })

  const notifySucessRecipe = () => toast.success('Receita Cadastrada', {
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

  const notifyErrorRecipe = () => toast.error('Erro no cadastrado!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const navigate = useNavigate()

  useProtectedPage(navigate)

  const [isTitleValid, setIsTitleValid] = useState(true)
  const [isUrlValid, setIsUrlValid] = useState(true)

  useEffect(() => {
    setIsTitleValid(validateName(form.title))
    setIsUrlValid(/http[s]?:\/\/[a-zA-Z]+\.com/.test(form.imageUrl))
  }, [form])

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isTitleValid) {
        await AddRecipe({
          title: form.title,
          description: form.description,
          imageUrl: form.imageUrl,
        })
        notifySucessRecipe()
      }

    } catch (e) {
      notifyErrorRecipe()
    }
  }

  return (
    <AddRecipePageContainer>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <PageTitleStyled>Adicionar nova receita</PageTitleStyled>
          <TitleInput
            value={form.title}
            onChange={onChangeInputs}
            isValid={isTitleValid}
          />
          <DescriptionTextArea
            value={form.description}
            onChange={onChangeInputs}
            isValid={true}
          />
          <ImageInput
            value={form.imageUrl}
            onChange={onChangeInputs}
            isValid={isUrlValid}
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
    </AddRecipePageContainer>
  )
}