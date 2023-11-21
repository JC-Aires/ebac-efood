import Food from '../../models/Food'
import Plate from '../Plate'

import pizza from '../../assets/images/pizza2.png'
import close from '../../assets/images/close.png'

import { ContainerShops, List } from './styles'
import { useState } from 'react'

type Props = {
  foods: Food[]
}

const PlateList = ({ foods }: Props) => {
  // const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
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
      {/* <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={pizza} />
          <h4>Pizza Marguerita</h4>
          <img className="fechar" src={close} alt="Ícone de fechar" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal> */}
    </>
  )
}

export default PlateList
