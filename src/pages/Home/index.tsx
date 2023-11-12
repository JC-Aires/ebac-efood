import Hero from '../../components/Hero'
import ShopList from '../../components/ShopList'
import Restaurant from '../../models/Restaurant'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'

const shops: Restaurant[] = [
  {
    type: 'Japonesa',
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    nota: 4.5,
    id: 1,
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    type: 'Italiana',
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    nota: 4.8,
    id: 2,
    infos: ['Italiana']
  },
  {
    type: 'Japonesa',
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    nota: 4.5,
    id: 3,
    infos: ['Japonesa']
  },
  {
    type: 'Japonesa',
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    nota: 4.5,
    id: 4,
    infos: ['Japonesa']
  },
  {
    type: 'Japonesa',
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    nota: 4.5,
    id: 5,
    infos: ['Japonesa']
  },
  {
    type: 'Japonesa',
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    nota: 4.5,
    id: 6,
    infos: ['Japonesa']
  }
]

const Home = () => (
  <>
    <Hero />
    <ShopList restaurants={shops} />
  </>
)

export default Home
