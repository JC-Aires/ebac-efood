import { useState } from 'react'

import {
  Descricao,
  Card,
  Nome,
  TextContainer,
  Modal,
  ModalContent
} from './styles'

import close from '../../assets/images/close.png'
import { ButtonAdd, ButtonCar } from '../Button/styles'

import { MenuItemsType } from '../../pages/Perfil'

type Props = {
  name: string
  description: string
  image: string
  preco: number
  porcao: string
  id: number
  menu?: MenuItemsType
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export function shortenText(text: string): string {
  if (text.length <= 160) {
    return text
  }
  const shortenedText = text.slice(0, 160) + '...'
  return shortenedText
}

const Plate = ({ name, description, image, porcao, preco }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  return (
    <>
      <Card
        onClick={() => {
          setModalEstaAberto(true)
          setModalUrl(image)
        }}
      >
        <img src={image} alt={name} />
        <Nome>{name}</Nome>
        <Descricao>{shortenText(`${description}`)}</Descricao>
        <ButtonAdd type={'link'} to={'/perfil'} title={'name'}>
          Adicionar ao carrinho
        </ButtonAdd>
      </Card>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={modalUrl} alt="" />
          <TextContainer>
            <p>{name}</p>
            <div>
              {description} <br /> <br />
              Serve: {porcao}
            </div>
            <ButtonCar>Adicionar ao carrinho - {formataPreco(preco)}</ButtonCar>
            <img
              className="fechar"
              src={close}
              alt="Ícone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </TextContainer>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default Plate
