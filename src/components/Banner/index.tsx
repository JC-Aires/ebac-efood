import { Imagem, Tipo, Titulo } from './styles'
import sushi from '../../assets/images/sushi.png'

const Banner = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${sushi})` }}>
      <div className="container">
        <Tipo>Japonesa</Tipo>
        <Titulo>Hioki Sushi</Titulo>
      </div>
    </Imagem>
  </>
)

export default Banner
