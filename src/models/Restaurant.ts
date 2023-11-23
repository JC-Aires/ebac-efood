class Restaurant {
  type: string
  name: string
  description: string
  image: string
  id: number
  nota: number
  infos: string[]
  cardapio: string[]
  destacado: boolean

  constructor(
    type: string,
    name: string,
    description: string,
    image: string,
    id: number,
    nota: number,
    infos: string[],
    cardapio: string[],
    destacado: boolean
  ) {
    this.id = id
    this.type = type
    this.name = name
    this.description = description
    this.image = image
    this.nota = nota
    this.infos = infos
    this.cardapio = cardapio
    this.destacado = destacado
  }
}

export default Restaurant
