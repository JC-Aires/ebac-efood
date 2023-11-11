import { Descricao, Card, Nome } from './styles'
import Button from '../Button'
import { ButtonAdd } from '../Button/styles'

type Props = {
  name: string
  description: string
  image: string
}

const Plate = ({ name, description, image }: Props) => (
  <Card>
    <img src={image} alt={name} />
    <Nome>{name}</Nome>
    <Descricao>{description}</Descricao>
    <ButtonAdd type={'link'} to={'/perfil'} title={'name'}>
      Adicionar ao carrinho
    </ButtonAdd>
  </Card>
)

export default Plate
