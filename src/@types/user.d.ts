declare namespace App {
  export interface User extends App.Model {
    username: string
    password: string
    email?: string
    image?: App.Image
    image_id?: number
  }
}
