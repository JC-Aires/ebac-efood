import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerShops = styled.ul`
  position: relative;
`

export const List = styled.li`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  gap: 32px;
  margin-top: 56px;
`

// export const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: none;
//   align-items: center;
//   justify-content: center;

//   &.visivel {
//     display: flex;
//   }

//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.8);
//   }
// `

// export const ModalContent = styled.div`
//   max-width: 1024px;
//   max-height: 344px;
//   position: relative;
//   z-index: 1;
//   display: flex;
//   padding: 32px;
//   background-color: ${cores.vermelho};

//   h4 {
//     color: ${cores.branca};
//     font-size: 18px;
//     font-weight: 900;
//     line-height: 21px;
//   }

//   img {
//     width: 280px;
//     height: 280px;
//     margin-right: 24px;
//     object-fit: cover;
//   }

//   .fechar {
//     width: 16px;
//     height: 16px;
//     position: absolute;
//     top: 8px;
//     right: -16px;
//   }
// `
