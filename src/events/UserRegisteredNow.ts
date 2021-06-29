import { TypedEmitter } from 'tiny-typed-emitter'

export class UserRegisteredNowEvents extends TypedEmitter<{
  registeredNow: (value: boolean) => void
}> {}

export default new UserRegisteredNowEvents()
