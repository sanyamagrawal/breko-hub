import type { FSA } from 'app/types'
import { request } from 'app/utils'
import { API_FETCH } from 'app/modules/bar/bar.constants'

export const apiFetch = ():FSA => ({
  type: API_FETCH,
  payload: {
    promise: request.fetch('/api/bar'),
  },
})
