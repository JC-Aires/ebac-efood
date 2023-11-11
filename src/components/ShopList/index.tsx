import Restaurant from '../../models/Restaurant'
import Shop from '../Shop'

import { ContainerShops, List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const ShopList = ({ restaurants }: Props) => (
  <ContainerShops>
    <List>
      {restaurants.map((restaurante) => (
        <Shop
          // highlight="Destaque da Semana"
          key={restaurante.id}
          type={restaurante.type}
          name={restaurante.name}
          description={restaurante.description}
          image={restaurante.image}
        />
      ))}
    </List>
  </ContainerShops>
)

export default ShopList
