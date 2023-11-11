class Food {
  name: string
  description: string
  image: string
  id: number

  constructor(name: string, description: string, image: string, id: number) {
    this.id = id
    this.name = name
    this.description = description
    this.image = image
  }
}

export default Food
