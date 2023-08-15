import React, { useContext, useEffect, useState } from 'react'
import { FeedContainerStyled, Button } from './styled'
import { ListRecipes } from '../../constants'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../../hooks'
import Card from '../../components/card'
import { Header } from '../../components'
import { RecipeContext } from '../../hooks/useRecipeContext'
import { goToAddRecipePage } from '../../routes';
import { Footer } from '../../components/footer'


export const FeedPage = () => {

  const { handleNameRecipe, setSearchRecipe } = useContext(RecipeContext)

  const navigate = useNavigate();
  useProtectedPage(navigate);

  const [recipes, setRecipes] = useState([]);

  console.log(recipes)

  const onClickAddButton = () => {
    goToAddRecipePage(navigate);
  };

  useEffect(() => {
    ListRecipes()
      .then((data) => {
        setRecipes(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filteredRecipes = recipes.filter(handleNameRecipe).slice(65, 85);

  return (
    <>
      <Header setSearchRecipe={setSearchRecipe} />
      <Button
        onClick={() => onClickAddButton()}
        variant="header"
      >
        Adicionar Receita +
      </Button>
      <FeedContainerStyled>
        {filteredRecipes.map((recipe, i) => (
          <Card key={i} recipe={recipe} id={recipe.id} image={recipe.imageUrl} />
        ))}
      </FeedContainerStyled>
      <Footer />
    </>
  );
};



