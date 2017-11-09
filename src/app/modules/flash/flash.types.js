// @flow

export type MessageType = 'error' | 'good' | 'info'

export type Message = {
  id: string,
  type: MessageType,
  message: string,
}
