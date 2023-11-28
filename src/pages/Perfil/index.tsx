import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { Container } from '../../styles'

import PlateList from '../../components/PlateList'

import { useGetMenuQuery, useGetRestaurantIdQuery } from '../../services/api'

export type MenuItemsType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  menu: string[]
}

export type MenuType = {
  titulo: string
  tipo: string
  capa: string
}

// const menu: Food[] = [
//   {
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza,
//     id: 1
//   },
//   {
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: massa,
//     id: 2
//   },
//   {
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza,
//     id: 3
//   },
//   {
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     image: pizza,
//     id: 3
//   }
// ]

const Perfil = () => {
  const { id } = useParams()
  const { data: menuState } = useGetMenuQuery(id!)
  const { data: shopState } = useGetRestaurantIdQuery(id!)

  if (menuState && shopState) {
    return (
      <>
        <Header />
        <Banner restaurant={shopState} />
        <Container>
          <PlateList foods={menuState} />
        </Container>
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Perfil
