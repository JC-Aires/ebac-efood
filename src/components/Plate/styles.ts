import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    margin: 8px;
    max-width: 304px;
    max-height: 167px;
  }
`

export const Nome = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-left: 8px;
  display: block;
  color: ${cores.creme};
`

// export const Container = styled.div`
//   border: 1px solid ${cores.vermelho};
//   border-top: none;
//   width: 472px;
//   height: 181px;
// `

export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 8px;
  color: ${cores.creme};
`
