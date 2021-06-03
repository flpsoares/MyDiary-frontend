declare namespace App {
  export interface Post extends App.Model {
    content: string
    user_id: number
    user: App.User
  }
}
