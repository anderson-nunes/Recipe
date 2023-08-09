import React, { useEffect, useState } from 'react'
import { FeedContainerStyled, RecipeCardStyled } from './styled'
import { ListRecipes } from '../../constants'
import { Button } from '@chakra-ui/react'
import { goToRecipeDetailPage } from '../../routes'
import { useNavigate } from 'react-router-dom'

export const FeedPage = () => {

  const [recipes, setRecipes] = useState([])
  const navigate = useNavigate()

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

  const onClickCard = (id) => {
    goToRecipeDetailPage(navigate, id)
  }

  return (
    <FeedContainerStyled>
      {recipes.slice(0, 20).map((recipe, i) => (
        <RecipeCardStyled key={i} onClick={() => onClickCard(recipe.recipe_id)}>
          <img src={recipe.image} alt="" />
          <h3>{recipe.title}</h3>
        </RecipeCardStyled>
      ))}
      <Button
        fontSize={"2rem"}
        width={"30px"}
      >+
      </Button>
    </FeedContainerStyled>
  )
}

