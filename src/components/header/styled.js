import styled from 'styled-components'
import { theme } from '../../styles'

export const HeaderStyled = styled.div`
 display: flex;
 padding: 30px 30px;
 justify-content: space-between;
 background-color: ${theme.colors.laranja["500"]};

 button {
 font-size: 1.4rem;
 }

 button:hover {
 color: white;
 }
`

export const ContainerButton = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;

`