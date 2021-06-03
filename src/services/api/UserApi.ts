import { api } from '../api'
import UsersCollection from '../collections/UsersCollection'

class UserApi {
  public async create({ username, password, email }: Partial<App.User>) {
    return api.post('user', {
      username,
      password,
      email
    })
  }

  public async list() {
    return api
      .get<App.User[]>('users')
      .then((res) => res.data)
      .then((users) => {
        UsersCollection.addMany(users)
        return users
      })
  }

  public async delete(user: App.User) {
    return api.delete(`user/${user.id}`).then(() => {
      UsersCollection.delete(user.id)
    })
  }
}

export default new UserApi()
