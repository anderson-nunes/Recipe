import { createContext, useState } from "react";

export const RecipeContext = createContext()

const RecipeProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [searchRecipe, setSearchRecipe] = useState('');

  const handleNameRecipe = (recipe) => {
    return recipe.title.toLowerCase().includes(searchRecipe.toLowerCase());
  };

  return (
    <RecipeContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        searchRecipe,
        setSearchRecipe,
        handleNameRecipe
      }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider