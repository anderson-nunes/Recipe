import styled from 'styled-components'

export const FeedContainerStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  gap: 3rem;
  /* display: ${props => (props.isVisible ? "block" : "none")}; */
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