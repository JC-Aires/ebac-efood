import { Descricao, Card, Nome } from './styles'
import Button from '../Button'
import close from '../../assets/images/close.png'
import { ButtonAdd } from '../Button/styles'
import { useState } from 'react'

import { Modal, ModalContent } from './styles'
import pizza from '../../assets/images/pizza2.png'

type Props = {
  name: string
  description: string
  image: string
}

const Plate = ({ name, description, image }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <Card onClick={() => setModalEstaAberto(true)}>
        <img src={image} alt={name} />
        <Nome>{name}</Nome>
        <Descricao>{description}</Descricao>
        <ButtonAdd type={'link'} to={'/perfil'} title={'name'}>
          Adicionar ao carrinho
        </ButtonAdd>
      </Card>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={pizza} />
          <h4>Pizza Marguerita</h4>
          <img className="fechar" src={close} alt="Ícone de fechar" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Plate
