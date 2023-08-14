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
    width: 80%; /* Reduz a largura da imagem para se adaptar ao tamanho da tela */
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
    font-size: 16px; /* Ajusta o tamanho da fonte para dispositivos móveis */
    max-width: 80vw; /* Reduz a largura do parágrafo para se adaptar ao tamanho da tela */
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