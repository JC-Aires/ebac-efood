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
          key={restaurante.id}
          type={restaurante.type}
          name={restaurante.name}
          description={restaurante.description}
          image={restaurante.image}
          nota={restaurante.nota}
          id={restaurante.id}
          infos={restaurante.infos}
        />
      ))}
    </List>
  </ContainerShops>
)

export default ShopList
