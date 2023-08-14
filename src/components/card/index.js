import React from 'react'
import { ContainerCard } from './styled'
import { goToRecipeDetailPage } from '../../routes'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button
}
  from '@chakra-ui/react'

export default function CardProduct({ recipe, id, image }) {

  const navigate = useNavigate()

  const onClickCard = (id) => {
    console.log(id)
    goToRecipeDetailPage(navigate, id)
  }

  return (
    <ContainerCard>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={image}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='2' display='flex' alignItems='center'>
            <Heading size='md'>{recipe.title}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter _hover={{ bg: "#FE7E02", color: "white" }}>
          <ButtonGroup spacing='2' margin='auto'>
            <Button
              variant='ghost'
              colorScheme='black'
              onClick={() => onClickCard(id)}>
              Visualizar Receita
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </ContainerCard>

  )
}

