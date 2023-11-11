class Restaurant {
  type: string
  name: string
  description: string
  image: string
  id: number

  constructor(
    type: string,
    name: string,
    description: string,
    image: string,
    id: number
  ) {
    this.id = id
    this.type = type
    this.name = name
    this.description = description
    this.image = image
  }
}

export default Restaurant
