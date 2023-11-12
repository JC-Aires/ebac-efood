class Restaurant {
  type: string
  name: string
  description: string
  image: string
  id: number
  nota: number

  constructor(
    type: string,
    name: string,
    description: string,
    image: string,
    id: number,
    nota: number
  ) {
    this.id = id
    this.type = type
    this.name = name
    this.description = description
    this.image = image
    this.nota = nota
  }
}

export default Restaurant
