import { api } from '../api'

import { Credentials, Token } from '../resources/AuthResource'

class UserApi {
  public async create({ username, password, email }: Partial<App.User>) {
    return api
      .post<App.User>('user', {
        username,
        password,
        email
      })
      .then((res) => res.data)
  }

  public async auth({ username, password }: Credentials) {
    return api
      .post<Token>('auth', {
        username,
        password
      })
      .then((res) => res.data)
  }

  public async setAvatar(image: File, filename: string) {
    const formData = new FormData()

    formData.append('image', image)
    formData.append('filename', filename)

    return api.put('user', formData).then((res) => res.data)
  }

  public async getUser() {
    return api.get<App.User>('auth/getuser').then((res) => res.data)
  }
}

export default new UserApi()
