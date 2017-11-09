import { createSelector } from 'reselect'
import { head, identity } from 'ramda'
import { get } from 'app/utils'

export const getMessages = createSelector(
  [ get('flash.messages', []) ],
  identity
)

export const getNextMessage = createSelector(
  [ getMessages ],
  head
)
