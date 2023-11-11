import Food from '../../models/Food'
import Plate from '../Plate'

import { ContainerShops, List } from './styles'

type Props = {
  foods: Food[]
}

const PlateList = ({ foods }: Props) => (
  <ContainerShops>
    <List>
      {foods.map((comida) => (
        <Plate
          key={comida.id}
          name={comida.name}
          description={comida.description}
          image={comida.image}
        />
      ))}
    </List>
  </ContainerShops>
)

export default PlateList
