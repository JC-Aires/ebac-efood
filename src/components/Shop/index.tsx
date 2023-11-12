import {
  Container,
  Descricao,
  Card,
  Nome,
  Nota,
  TituloContainer
} from './styles'
import Tag from '../Tag'
import Button from '../Button'
import star from '../../assets/images/star.svg'

type Props = {
  type: string
  name: string
  description: string
  image: string
  nota: number
  id: number
}

const Shop = ({ type, name, description, image, nota }: Props) => (
  <Card>
    <img src={image} alt={type} />
    <Tag>{type}</Tag>
    <Container>
      <TituloContainer>
        <Nome>{name}</Nome>
        <Nota>
          {nota}
          <img src={star} alt="estrela" />
        </Nota>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Button type={'link'} to={'/perfil'} title={'name'}>
        Saiba mais
      </Button>
    </Container>
  </Card>
)

export default Shop
