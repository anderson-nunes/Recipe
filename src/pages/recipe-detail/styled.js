import styled from 'styled-components'

export const PageContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 50vw;
  margin-top: 12rem;

  img {
    object-fit: contain;
    width: 80%; 
    max-width: 500px;
    height: auto;
    margin-bottom: 1rem;
  }

  h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1.5rem;
  }

  p {
    font-size: 16px; 
    max-width: 50vw; 
    text-align: center;
  }


@media screen and (max-width: 450px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`