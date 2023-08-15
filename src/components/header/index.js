
import { HeaderStyled, ContainerButton } from './styled';
import {
  Button, Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { goToFeedPage, goToLoginPage } from '../../routes';
import { useNavigate } from 'react-router-dom';
import { Search2Icon } from "@chakra-ui/icons";
import { useContext } from 'react';
import { RecipeContext } from '../../hooks/useRecipeContext';

export const Header = ({ searchRecipe, setSearchRecipe }) => {

  const { isLoggedIn, setIsLoggedIn } = useContext(RecipeContext)

  const navigate = useNavigate();

  const buttonAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem("cookenu.token");
      setIsLoggedIn(false);
    }
    goToLoginPage(navigate);
  };

  const buttonText = isLoggedIn ? "Logout" : "Login";

  return (
    <HeaderStyled>
      <Button onClick={() => goToFeedPage(navigate)} variant="header">Cookenu</Button>
      <ContainerButton>
        <InputGroup borderRadius={5} size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="#000" />}
          />
          <Input
            value={searchRecipe}
            onChange={(e) => setSearchRecipe(e.target.value)}
            type="text"
            placeholder="Search..."
            border="1px solid #000"
          />
        </InputGroup>
      </ContainerButton>
      <Button onClick={buttonAction} variant="header">{buttonText}</Button>
    </HeaderStyled>
  );
};

