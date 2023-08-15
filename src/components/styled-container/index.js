import styled from 'styled-components'

export const CenteredPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#f4f4f4;
`

export const FormContainer = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  input, p {
  margin-bottom: 10px;
  }

  @media screen and (max-width: 550px){
    width: 400px;
  }
`