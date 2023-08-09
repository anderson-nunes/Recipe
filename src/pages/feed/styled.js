import styled from 'styled-components'

export const FeedContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  justify-items: center;
  grid-gap: 10px 0;
  padding-top: 20px;
`

export const RecipeCardStyled = styled.div`
  width: 20vw;
  border: 1px solid black;
  transition: .5s;

  &:hover{
  transform: scale(1.05);
  cursor: pointer;
  }

  img{  
    padding: 10px;
  }
`