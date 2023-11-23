import styled from 'styled-components'
import { cores } from '../../styles'

export const ImageHeader = styled.div`
  width: 100%;
  height: 280px;
  position: relative;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: brightness(0.5);
  }
`

export const Tipo = styled.div`
  position: absolute;
  top: 25px;
  left: 170px;
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 100;
`

export const ShopName = styled.div`
  position: absolute;
  top: 214px;
  left: 170px;
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 900;
`
