import { TypedEmitter } from 'tiny-typed-emitter'

export class AlertEvents extends TypedEmitter<{
  currentLoginError: (message: string) => void
  currentRegisterError: (message: string) => void
}> {}

export default new AlertEvents()
