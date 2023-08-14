import styled from 'styled-components'

export const PageContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 50vw;
  margin-top: 3rem;

  img {
    object-fit: contain;
    width: 500px;
    height: 450px;
  }

  h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1.5rem;
  }

  p{
    width: 30vw;
    font-size: 20px;
  }
`