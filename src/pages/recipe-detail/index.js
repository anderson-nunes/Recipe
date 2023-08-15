import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetRecipe } from '../../services'
import { PageContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks'
import { Header } from '../../components'

export const RecipeDetailPage = () => {

  const { id } = useParams()

  const [recipe, setRecipe] = useState()

  const navigate = useNavigate()

  useProtectedPage(navigate)

  useEffect(() => {
    GetRecipe(id)
      .then(recipe => {
        setRecipe(recipe)
      })
      .catch(e => alert(e))
  }, [])


  return (
    !recipe ? <h1>Não há receitas com esse id</h1> : (
      <>
        <Header />
        <PageContainer>
          <img src={recipe.imageUrl} />
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </PageContainer>
      </>
    )
  )
}