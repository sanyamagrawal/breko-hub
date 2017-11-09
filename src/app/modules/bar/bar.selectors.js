import { createSelector } from 'reselect'
import { identity } from 'ramda'
import { get } from 'app/utils'

export const getBar = createSelector(
  [ get('bar.data', []) ],
  identity
)
