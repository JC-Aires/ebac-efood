import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import { Container } from '../../styles'
import Food from '../../models/Food'
import PlateList from '../../components/PlateList'

const menu: Food[] = [
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 1
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 2
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 3
  },
  {
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 3
  }
]

const Perfil = () => (
  <>
    <Header />
    <Banner />
    <Container>
      <PlateList foods={menu} />
    </Container>
  </>
)

export default Perfil
