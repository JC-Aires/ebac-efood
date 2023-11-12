class Restaurant {
  type: string
  name: string
  description: string
  image: string
  id: number
  nota: number
  infos: string[]

  constructor(
    type: string,
    name: string,
    description: string,
    image: string,
    id: number,
    nota: number,
    infos: string[]
  ) {
    this.id = id
    this.type = type
    this.name = name
    this.description = description
    this.image = image
    this.nota = nota
    this.infos = infos
  }
}

export default Restaurant
