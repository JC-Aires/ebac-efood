import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  width: 472px;
  height: 398px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  position: relative;

  ${TagContainer} {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`

export const Nome = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  margin-top: 8px;
  margin-left: 8px;
  display: block;
`

export const Container = styled.div`
  border: 1px solid ${cores.vermelho};
  border-top: none;
  width: 472px;
  height: 181px;
`

export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 16px 8px;
`
