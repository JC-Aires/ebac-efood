import pizza from '../../assets/images/pizza.png'
import massa from '../../assets/images/massa.png'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { Container } from '../../styles'
import Food from '../../models/Food'
import PlateList from '../../components/PlateList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type MenuItemsType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
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
  const [menuState, setMenuState] = useState<MenuItemsType[]>([])
  const [restaurantState, setRestaurantState] = useState<MenuType>(
    {} as MenuType
  )

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMenuState(res.cardapio)
        setRestaurantState(res)
      })
  }, [id])

  return (
    <>
      <Header />
      <Banner restaurant={restaurantState} />
      <Container>
        <PlateList foods={menuState} />
      </Container>
    </>
  )
}

export default Perfil
