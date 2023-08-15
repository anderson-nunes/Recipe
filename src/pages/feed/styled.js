import styled from 'styled-components'

export const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding:2rem;
cursor: pointer;
font-size: 20px;
font-weight: 700;
margin-top: 8rem;

&:hover{
  text-decoration: underline;
}
`

export const FeedContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  gap: 3rem;
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