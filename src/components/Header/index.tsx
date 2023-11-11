import { Fundo } from './styles'
import vectorFundo from '../../assets/images/vectorFundo.png'
import logo from '../../assets/images/logo_efood.svg'

const Hero = () => (
  <Fundo style={{ backgroundImage: `url(${vectorFundo})` }}>
    <p>Restaurantes</p>
    <img src={logo} alt="EFOOD" />
    <p>0 produto(s) no carrinho</p>
  </Fundo>
)

export default Hero
