import React, { useEffect, useState } from 'react'
import { FeedContainerStyled, RecipeCardStyled } from './styled'
import { ListRecipes } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks'
import Card from '../../components/card'

export const FeedPage = () => {

  const navigate = useNavigate()

  useProtectedPage(navigate)

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    ListRecipes()
      .then(data => {
        setRecipes(data)
        console.log('aquiii=>>>', data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (

    <>
      <FeedContainerStyled>
        {recipes.slice(0, 20).map((recipe, i) => {
          return <Card
            key={i}
            recipe={recipe}
            id={recipe.id}
            image={recipe.imageUrl}
          />
        })}
      </FeedContainerStyled>
    </>
  )
}

