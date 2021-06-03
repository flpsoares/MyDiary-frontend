declare namespace App {
  export interface User extends App.Model {
    username: string
    password: string
    email?: string
  }
}
