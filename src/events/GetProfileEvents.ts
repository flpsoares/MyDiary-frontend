import { TypedEmitter } from 'tiny-typed-emitter'

export class GetProfileEvents extends TypedEmitter<{
  getUserProfile: (username: string) => void
}> {}

export default new GetProfileEvents()
