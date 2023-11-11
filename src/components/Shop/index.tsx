import { Container, Descricao, Card, Nome } from './styles'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  type: string
  name: string
  description: string
  image: string
  highlight?: string
}

const Shop = ({ type, name, description, image, highlight }: Props) => (
  <Card>
    <img src={image} alt={type} />
    {highlight && <Tag>Destaque da Semana</Tag>}
    <Tag>{type}</Tag>
    <Container>
      <Nome>{name}</Nome>
      <Descricao>{description}</Descricao>
      <Button type={'link'} to={'/perfil'} title={'name'}>
        Saiba mais
      </Button>
    </Container>
  </Card>
)

export default Shop
