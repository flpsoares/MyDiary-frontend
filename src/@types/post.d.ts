declare namespace App {
  export interface Post extends App.Model {
    content: string
    filename?: string
    image?: App.Image
    image_id?: number
    user: App.User
    user_id: number
  }
}
