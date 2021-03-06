import { api } from '../api'
import PostsCollection from '../collections/PostsCollection'

class PostApi {
  public async create({ content }: Partial<App.Post>) {
    return api
      .post<App.Post>('post', {
        content
      })
      .then((res) => res.data)
      .then((post) => {
        PostsCollection.set(post)
        return post
      })
  }

  public async createWithImage({ content, image, filename }) {
    const formData = new FormData()
    formData.append('content', content)
    formData.append('image', image)
    formData.append('filename', filename)

    return api
      .post<App.Post>('post', formData)
      .then((res) => res.data)
      .then((post) => {
        PostsCollection.set(post)
        return post
      })
  }

  public async list() {
    return api
      .get<App.Post[]>('posts')
      .then((res) => res.data)
      .then((posts) => {
        PostsCollection.addMany(posts)
        return posts
      })
  }

  public async delete(post: App.Post) {
    return api.delete(`post/${post.id}`).then(() => {
      PostsCollection.delete(post.id)
    })
  }
}

export default new PostApi()
