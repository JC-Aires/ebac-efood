import styled from 'styled-components'

export const Fundo = styled.div`
  width: 100%;
  height: 162px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;

    &.carrinho {
      cursor: pointer;
    }
  }

  img {
    height: 57.5px;
    width: 125px;
  }
`
