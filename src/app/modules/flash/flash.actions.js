// @flow
import uuid from 'uuid'
import type { FSA } from 'app/types'
import { REMOVE_MESSAGE, ADD_MESSAGE } from 'app/modules/flash/flash.constants'
import type { MessageType } from 'app/modules/flash/flash.types'

const makeFlash = (message, type='info') => ({
  type,
  message,
  id: uuid.v1(),
})

export const removeMessage = (id:string):FSA => ({
  type: REMOVE_MESSAGE,
  payload: { id },
})

export const addMessage = (message:string, type:MessageType='info'):FSA => ({
  type: ADD_MESSAGE,
  payload: makeFlash(message, type),
})
