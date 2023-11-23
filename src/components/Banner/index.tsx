import { ImageHeader, ShopName, Tipo } from './styles'
import { MenuType } from '../../pages/Perfil'

type Props = {
  restaurant: MenuType
}

const Banner = ({ restaurant }: Props) => (
  <ImageHeader>
    <img src={restaurant.capa} alt="Imagem header" />
    <div className="container">
      <Tipo>
        {restaurant?.tipo?.charAt(0).toUpperCase() + restaurant?.tipo?.slice(1)}
      </Tipo>
      <ShopName>{restaurant.titulo}</ShopName>
    </div>
  </ImageHeader>
)

export default Banner
